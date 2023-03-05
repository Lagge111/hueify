import Color, { Palette } from "color-thief-react";
import Loader from "./Loader";

const ColorGenerator = ({ imageData }) => {
  return (
    <>
      {imageData && (
        <div className="flex flex-col justify-center">
          <p className="text-white/50 text-sm text-center mt-10 italic">
            Click on a HEX code to copy it.
          </p>
          <Palette
            src={imageData}
            crossOrigin="anonymous"
            format="hex"
            colorCount={6}
          >
            {({ data, loading }) => {
              return (
                <div className="text-white/70 mt-10">
                  <p className="text-2xl text-center mb-4 font-mona">
                    Color palette
                  </p>
                  {loading ? (
                    <Loader />
                  ) : (
                    <ul className="md:flex grid grid-cols-3 gap-8 font-mona justify-center items-center content-center">
                      {data
                        ?.filter(
                          (item, index, array) => array.indexOf(item) === index
                        )
                        .map((color, index) => (
                          <li
                            key={index}
                            className="flex flex-col bg-[#24292F] rounded-lg items-center"
                          >
                            <div
                              style={{ backgroundColor: color }}
                              className="w-20 h-20 rounded-lg"
                            ></div>
                            <p
                              onClick={() =>
                                navigator.clipboard.writeText(color)
                              }
                              className={`text-white font-light mt-4 tracking-widest hover:opacity-80 cursor-pointer`}
                            >
                              {color}
                            </p>
                          </li>
                        ))}
                    </ul>
                  )}
                </div>
              );
            }}
          </Palette>
          <div className="mt-12">
            <Color src={imageData} crossOrigin="anonymous" format="hex">
              {({ data, loading }) => {
                return (
                  <div className="flex flex-col items-center text-center">
                    <div className="text-white/70 font-mona mb-4 text-2xl">
                      Most predominant color
                    </div>
                    {loading ? (
                      <Loader />
                    ) : (
                      <>
                        <div
                          style={{ backgroundColor: `${data}` }}
                          className="w-20 h-20 rounded-lg"
                        ></div>
                        <p
                          onClick={() => navigator.clipboard.writeText(data)}
                          className="text-white font-mona font-light mt-4 tracking-widest hover:opacity-80 cursor-pointer"
                        >
                          {data}
                        </p>
                      </>
                    )}
                  </div>
                );
              }}
            </Color>
          </div>
        </div>
      )}
    </>
  );
};

export default ColorGenerator;
