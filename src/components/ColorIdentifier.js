import { HexColorPicker, HexColorInput } from "react-colorful";
import { useEffect, useState, useCallback } from "react";

const ColorIdentifier = () => {
  const [color, setColor] = useState("#ffffff");
  const [colorName, setColorName] = useState(null);
  let timeoutId = null;

  const getColorName = useCallback(
    async (newColor) => {
      let response = await fetch(
        `https://www.thecolorapi.com/id?hex=${newColor.slice(1)}`
      );
      let result = await response.json();
      setColorName(result.name.value);
      console.log(colorName);
    },
    [colorName]
  );

  const handleColorChange = (newColor) => {
    setColor(newColor);
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      getColorName(newColor);
    }, 500);
  };

  useEffect(() => {
    getColorName(color);
  }, [color, getColorName]);

  return (
    <div className="identifier-container w-full max-w-[552px] min-w-[300px] mt-28 text-center">
      <div className="rounded-xl bg-gradient-to-br from-[#93f5ec] to-[#a77bf3] w-full p-[1px]">
        <div className="collapse collapse-arrow bg-dark_gray rounded-xl pt-6">
          <input className="peer w-full" type="checkbox" />
          <div className="collapse-title bg-dark_gray text-primary-content peer-checked:bg-dark_gray peer-checked:text-secondary-content">
            <h3 className="text-white sm:text-4xl xs:text-3xl text-3xl font-extrabold font-mona mb-4">
              Color Identifier
            </h3>
            <p className="text-white/50 font-mona mb-6">
              Want to know the name of a color? Look no further!
            </p>
          </div>

          <div className="collapse-content bg-primary text-primary-content peer-checked:bg-dark_gray peer-checked:text-secondary-content">
            <div className="flex flex-col justify-center items-center mt-4">
              <HexColorPicker color={color} onChange={handleColorChange} />
              <HexColorInput color={color} onChange={handleColorChange} />
              <div className="text-white font-mona text-xl">
                {colorName && (
                  <div className="flex flex-col mt-6 mb-4 justify-center items-center text-center gap-4">
                    <div
                      style={{ backgroundColor: `${color}` }}
                      className="w-20 h-20 rounded-lg"
                    ></div>
                    <p className="text-white/80 font-mona">{colorName}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorIdentifier;
