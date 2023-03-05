import { useState } from "react";
import Nav from "./components/Nav";
import Dropzone from "./components/Dropzone";
import Hero from "./components/Hero";
import ResultsCard from "./components/ResultsCard";
import Footer from "./components/Footer";
import Instructions from "./components/Instructions";

function App() {
  const [imageData, setImageData] = useState(null);

  const handleDataChange = () => {
    setImageData(null);
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-[#2C2443] via-primary to-primary min-h-screen cursor-default">
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
      <Instructions />
      <Footer />
    </div>
  );
}
export default App;
