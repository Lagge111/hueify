import Color, { Palette } from "color-thief-react";
import { useState } from "react";

const ColorGenerator = ({ imageData }) => {
  return (
    <>
      {imageData && (
        <div className="flex flex-col justify-center">
          <p className="text-white/50 text-sm text-center mt-10">
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
                <div className="text-white mt-10">
                  <p className="text-2xl text-center mb-4 font-mona">
                    Color palette
                  </p>
                  <ul className="flex gap-8 font-mona">
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
                            onClick={() => navigator.clipboard.writeText(color)}
                            className={`text-white font-light mt-4 tracking-widest hover:opacity-80 cursor-pointer`}
                          >
                            {color}
                          </p>
                        </li>
                      ))}
                  </ul>
                </div>
              );
            }}
          </Palette>
          <div className="mt-12">
            <Color src={imageData} crossOrigin="anonymous" format="hex">
              {({ data, loading }) => {
                return (
                  <div className="flex flex-col items-center">
                    <div className="text-white font-mona mb-4 text-2xl">
                      Most predominant color
                    </div>
                    <div
                      style={{ backgroundColor: `${data}` }}
                      className="w-20 h-20 rounded-lg"
                    ></div>
                    <p className="text-white font-light mt-4 tracking-widest">
                      {data}
                    </p>
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
