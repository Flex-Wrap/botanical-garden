import axios from "axios";
import { useEffect, useState, useRef, ChangeEvent } from "react";
import send from '/assets/send.svg';
import back from '/assets/backbutton.svg';
import { useNavigate } from "react-router-dom";

// Define types for the props and state
interface ChatBotProps {
    name: string;
    prompt: string;
    presetResponses: Record<string, string>;
    topMessage: string;
}

interface OpenAIResponse {
    choices: {
      message: {
        content: string;
      };
    }[];
  }

interface Message {
    text: string;
    sender: "user" | "bot";
}

export default function ChatBot ({ name, prompt, presetResponses, topMessage } : ChatBotProps) {
    const navigate = useNavigate();

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    const API_KEY = import.meta.env.REACT_APP_API_KEY;

    const chatBoxRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (chatBoxRef.current) {
        chatBoxRef.current.scrollTo({
            top: chatBoxRef.current.scrollHeight,
            behavior: "smooth",
        });
        }
    }, [messages]);

    const sendMessage = async (message: string = input) => {
        if (!message || typeof message !== "string" || !message.trim()) return;

    const userMessage: Message = { text: message, sender: "user" };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    // Check if the message matches any preset question
    if (presetResponses[message]) {
      const botMessage: Message = { text: presetResponses[message], sender: "bot" };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } else {
      try {
        const response = await axios.post<OpenAIResponse>(
          "https://api.openai.com/v1/chat/completions",
          {
            model: "gpt-4",
            messages: [
              { role: "system", content: prompt },
              { role: "user", content: message },
            ],
          },
          {
            headers: {
              Authorization: `Bearer ${API_KEY}`, // API key
            },
          }
        );
        console.log("API Response: ", response);

        if (response.data && response.data.choices && response.data.choices[0]) {
          const botMessage: Message = { text: response.data.choices[0].message.content, sender: "bot" };
          setMessages((prevMessages) => [...prevMessages, botMessage]);
        } else {
          console.error("Error: Response structure is not as expected", response);
          setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I am having trouble responding right now.", sender: "bot" }]);
        }
      } catch (error) {
        console.error("Error:", error);
        setMessages((prevMessages) => [...prevMessages, { text: "Sorry, I am having trouble responding right now.", sender: "bot" }]);
      }
      setInput("");
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className={`body-${name}`}>
      <button onClick={() => navigate("/map")}><div className="back-button">
        <img src={back} alt="Back" />
        <h3>Back to map</h3>
      </div></button>
      <div className="chat-container">
        <div className="top-message">
          <img src={`${import.meta.env.BASE_URL}assets/${name}.png`} alt={name} />
          <h4 className="text-black">{topMessage}</h4>
        </div>
        <div className="chat-box" ref={chatBoxRef}>
          <div className="preset-questions">
            {Object.keys(presetResponses).map((question, index) => (
              <button
                key={index}
                className="question"
                onClick={() => sendMessage(question)}
              >
                {question}
              </button>
            ))}
          </div>
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === "bot" ? "bot-message" : "user-message"}>
              {msg.text}
            </div>
          ))}
        </div>
        <div className="input-box">
          <input
            value={input}
            onChange={handleInputChange}
            placeholder={`Type a message to ${name}...`}
            className="placeholder-gray-500"
          />
          <button onClick={() => sendMessage(input)}><img src={send} alt="Send" /></button>
        </div>
      </div>
    </div>
  );
};