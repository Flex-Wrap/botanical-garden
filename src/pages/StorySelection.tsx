import StoryCard from "../components/StoryCard";

function StorySelection() {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-900 text-white">
        <h1 className="text-2xl font-bold">This is the story selection page</h1>
        <StoryCard icon="assets/romantic.svg" name="Romantic" description="Are you ready to fall in love with Botanical Garden?"/>
      </div>
    );
  }
  
  export default StorySelection;
  