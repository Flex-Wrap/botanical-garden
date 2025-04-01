type ProgressMarkerProps = {
    progress: boolean[]; // Array of booleans for progress
    selectedColor: string;
    notSelectedColor: string;
  };
  
  const ProgressMarker: React.FC<ProgressMarkerProps> = ({
    progress,
    selectedColor,
    notSelectedColor,
  }) => {
    return (
      <div className="flex space-x-2">
        {progress.map((isSelected, index) => (
          <div
            key={index}
            className="w-3 h-3 rounded-full"
            style={{
              backgroundColor: isSelected ? selectedColor : notSelectedColor,
            }}
          />
        ))}
      </div>
    );
  };
  
  export default ProgressMarker;
  