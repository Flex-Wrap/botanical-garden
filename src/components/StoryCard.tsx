interface Props {
    icon: string;
    name: string;
    description: string;
}

export default function StoryCard({icon, name, description} : Props) {
    return (
        <div className="flex flex-row gap-5 relative p-4 bg-[#E1EED9] rounded-2xl">
            <img src={icon}/>
            <div>
                <h3>{name}</h3>
                <p>{description}</p>
            </div>
            <button><img src="assets/continueButton.svg"/></button>
        </div>
    )
}
