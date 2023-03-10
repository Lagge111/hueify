const Footer = () => {
  return (
    <div className="flex justify-center items-center mx-auto max-w-[900px] mt-auto pt-20 mb-10 flex-col font-mona text-xs text-white/50 gap-2 tracking-widest text-center">
      <p>
        Built by{" "}
        <a
          href="https://github.com/Lagge111"
          target="_blank"
          rel="noreferrer"
          className="bg-gradient-to-r from-[#93f5ec] to-[#a77bf3] text-transparent bg-clip-text font-bold"
        >
          Jacob Lager
        </a>
      </p>
      <p>Built with React, Tailwind & daisyUI</p>
    </div>
  );
};

export default Footer;
