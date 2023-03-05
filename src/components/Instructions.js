const Instructions = () => {
  return (
    <div className="font-mona text-white mt-32 mb-16 flex justify-center items-center">
      <div className="flex flex-col max-w-2xl">
        <h3 className="text-3xl font-bold mb-3">How does it work?</h3>
        <p className="text-white/80 leading-7">
          How do you extract your beautiful color palette from your image?
          There's actually a tiny wizard handling the backend for this app. He's
          currently underpaid, but hey, it's a startup. What did you expect,
          tiny backend wizard?
        </p>
        <p className="text-white/80 leading-7 mt-3">
          Jokes aside, the color extraction works by parsing the pixels of the
          uploaded image, constructing an array of the pixels' RGB values, and
          applying color quantization to reduce the number of unique colors in
          the image. The colors are then converted from their RGB values to
          their equivalent HEX values. Et voilà!
        </p>
        <p className="text-white/80 leading-7 mt-3">
          And don't worry, your images are never stored or kept.
        </p>
      </div>
    </div>
  );
};

export default Instructions;
