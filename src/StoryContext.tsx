import { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our context
interface StoryContextType {
  selectedStory: string | null;
  setSelectedStory: (story: string) => void;
}

// Create the context with a default value of null
const StoryContext = createContext<StoryContextType | undefined>(undefined);

// Provider component
export const StoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedStory, setSelectedStory] = useState<string | null>(null);

  return (
    <StoryContext.Provider value={{ selectedStory, setSelectedStory }}>
      {children}
    </StoryContext.Provider>
  );
};

// Custom hook to use the story context
export const useStory = () => {
  const context = useContext(StoryContext);
  if (!context) {
    throw new Error("useStory must be used within a StoryProvider");
  }
  return context;
};
