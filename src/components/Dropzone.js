import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ setImageData }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setImageData(URL.createObjectURL(acceptedFiles[0]));
    },
    [setImageData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mx-auto flex items-center justify-center max-w-[552px] w-full">
      <div
        className={`flex flex-col justify-center items-center rounded-xl bg-gradient-to-br from-[#93f5ec] to-[#a77bf3] w-full group p-[1px] ${
          isDragActive
            ? "transition-all duration-75 shadow-2xl shadow-white/10 border-dashed border-2 border-white/70"
            : "transition-all duration-75"
        }`}
      >
        <div
          {...getRootProps()}
          className={`rounded-xl flex flex-col justify-center w-full md:min-w-[548px] max-h-[500px] min-h-[250px] bg-dark_gray font-mona text-white cursor-pointer text-center`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <p className="text-4xl font-extrabold mb-4">Almost there!</p>
              <p className="text-white/50">Drop the image here...</p>
            </>
          ) : (
            <>
              <p className="text-4xl font-extrabold mb-4">Try it out!</p>
              <p className="text-white/50 mx-4">
                Drag and drop your image here, or click to select an image
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropzone;
