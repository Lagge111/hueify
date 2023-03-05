const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <div className="fixed w-full z-50 mx-auto pt-4 top-0 backdrop-blur-sm bg-primary/30">
      <div className="max-w-3xl mx-auto px-4 md:px-6 flex justify-between items-center sm:py-2 text-white font-mona font-semibold">
        <div onClick={scrollToTop} className="sm:flex hidden">
          Hueify
        </div>
        <div className="sm:flex hidden">Link</div>
        <div className="sm:flex hidden">Link</div>
        <a
          href="/"
          target="_blank"
          rel="noreferrer"
          className="font-mona border rounded border-secondary text-secondary px-4 py-2 text-sm hover:bg-white/20 ease-in-out duration-300 no-underline sm:flex hidden"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Nav;
