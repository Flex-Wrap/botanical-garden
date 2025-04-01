import NotificationBar from "../components/NotificationBar";

function Map() {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-red-900 text-white">
        <h1 className="text-2xl font-bold">This is the map page</h1>
        <NotificationBar
        message="You are near Golden Gate Park!"
        targetLatitude={56.153814}
        targetLongitude={10.214543}
        radius={200}
        imageUrl={"https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTEyL3Jhd3BpeGVsb2ZmaWNlOV8zZF9jaGFyYWN0ZXJfY3V0ZV9hX2JveV9zdHVkZW50c193YWxraW5nX3BsYXlmdV81NmIxOThiNy1mNTQzLTRiNWMtOTE0MC0xYTExYzk2Yjk3YTQtbTRyeDh2YnkucG5n.png"}
        name={"Aaron"}
      />
      </div>
      
    );
  }
  
  export default Map;
  