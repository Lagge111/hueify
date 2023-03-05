import ColorGenerator from "./ColorGenerator";

const ResultsCard = ({ imageData, handleDataChange }) => {
  return (
    <div className="flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#93f5ec] to-[#a77bf3] w-full max-w-[750px] p-[1px]">
      <div className="flex flex-col justify-center items-center bg-[#24292F] py-12 px-10 rounded-xl max-w-[748px] md:min-w-[748px] min-w-[300px]">
        <img
          src={imageData}
          alt="img"
          className="max-w-[650px] max-h-[350px] w-full object-contain"
        />
        <div className="flex justify-center items-center mt-10">
          <button
            onClick={handleDataChange}
            className="font-mona border rounded border-white/80 text-white/80 px-4 py-3 text-sm font-semibold hover:bg-white/20 ease-in-out duration-300 no-underline tracking-wide"
          >
            Start over
          </button>
        </div>
        <ColorGenerator imageData={imageData} />
      </div>
    </div>
  );
};

export default ResultsCard;
