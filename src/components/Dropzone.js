import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Dropzone = ({ imageData, setImageData }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      setImageData(URL.createObjectURL(acceptedFiles[0]));
    },
    [setImageData]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="mx-auto flex items-center justify-center]">
      <div
        className={`rounded-xl bg-gradient-to-br from-[#93f5ec] to-[#a77bf3] w-full group p-[1px] ${
          isDragActive
            ? "p-[1px] transition-all duration-75 shadow-2xl shadow-white/10 border-dashed border-2 border-white/70"
            : "p-[1px] transition-all duration-75"
        }`}
      >
        <div
          {...getRootProps()}
          className={`rounded-xl flex flex-col justify-center w-full min-w-[550px] max-h-[500px] min-h-[250px] bg-dark_gray font-mona text-white cursor-pointer text-center`}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <>
              <p className="text-3xl font-bold mb-4">Almost there!</p>
              <p className="text-white/50">Drop the image here...</p>
            </>
          ) : (
            <>
              <p className="text-3xl font-bold mb-4">Try it out!</p>
              <p className="text-white/50">
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
