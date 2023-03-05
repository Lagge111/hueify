import { Github } from "./Icons";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="fixed w-full z-50 mx-auto py-4 top-0 backdrop-blur-sm bg-primary/30">
      <div className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2 text-white font-mona font-semibold">
        <div onClick={scrollToTop} className="flex cursor-pointer text-xl">
          <span className="bg-gradient-to-r from-[#93f5ec] to-[#a77bf3] text-transparent bg-clip-text text-center font-extrabold text-xl">
            HUE
          </span>
          ify
        </div>
        <a
          href="/https://github.com/Lagge111/hueify"
          target="_blank"
          rel="noreferrer"
          className="flex"
        >
          <Github />
        </a>
      </div>
    </div>
  );
};

export default Nav;
