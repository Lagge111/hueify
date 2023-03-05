import ColorGenerator from "./ColorGenerator";

const ResultsCard = ({ imageData, setImageData, handleDataChange }) => {
  return (
    <div className="flex flex-col bg-[#24292F] py-10 px-10 rounded-lg">
      <img
        src={imageData}
        alt="img"
        className="max-w-[650px] max-h-[350px] w-full object-contain"
      />
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleDataChange}
          className="border border-white text-white font-mona px-3 py-2 rounded"
        >
          Start over
        </button>
      </div>
      <ColorGenerator imageData={imageData} />
    </div>
  );
};

export default ResultsCard;
