import { useState } from "react";
import Nav from "./components/Nav";
import Dropzone from "./components/Dropzone";
import Hero from "./components/Hero";
import ResultsCard from "./components/ResultsCard";

function App() {
  const [imageData, setImageData] = useState(null);

  const handleDataChange = () => {
    setImageData(null);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#2C2443] via-primary to-primary h-full cursor-default">
      <Nav />
      <Hero />
      {imageData ? (
        <ResultsCard
          imageData={imageData}
          setImageData={setImageData}
          handleDataChange={handleDataChange}
        />
      ) : (
        <Dropzone imageData={imageData} setImageData={setImageData} />
      )}
    </div>
  );
}
export default App;
