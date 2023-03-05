import ColorGenerator from "./ColorGenerator";

const ResultsCard = ({ imageData, setImageData, handleDataChange }) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#24292F] py-12 px-10 rounded-xl max-w-[750px] md:min-w-[750px]">
      <img
        src={imageData}
        alt="img"
        className="max-w-[650px] max-h-[350px] w-full object-contain"
      />
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handleDataChange}
          className="font-mona border rounded border-white text-white px-4 py-3 text-sm font-semibold hover:bg-white/20 ease-in-out duration-300 no-underline sm:flex hidden tracking-wide"
        >
          Start over
        </button>
      </div>
      <ColorGenerator imageData={imageData} />
    </div>
  );
};

export default ResultsCard;
