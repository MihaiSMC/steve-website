import "./App.css";

function App() {
  return (
    <div className="w-screen bg-[#EF5C16] min-h-[100svh] md:pb-6 max-h-[100svh] sm:max-h-none">
      <div className="w-full mx-auto flex flex-row justify-between py-4 px-4 md:py-4 md:px-4 lg:py-6 lg:px-6 xl:py-8 xl:px-8 2xl:py-10 2xl:px-10 3xl:px-16 3xl:py-16">
        <a
          className="rock-3d-regular text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 3xl:text-9xl font-bold select-none"
          href="/"
        >
          STEVE
        </a>

        <div className="flex flex-row items-start space-x-3 md:space-x-3 lg:space-x-4 2xl:space-x-6 3xl:space-x-8">
          <div className="w-[2em] md:w-[2rem] lg:w-[2.5rem] 2xl:w-[3rem] 3xl:w-[3.5rem] transition-transform hover:scale-110 duration-300">
            <a href="https://twitter.com/" target="_blank">
              <img src="./x.png" className="w-full"></img>
            </a>
          </div>
          <div className="w-[2rem] md:w-[2rem] lg:w-[2.5rem] 2xl:w-[3rem] 3xl:w-[3.5rem] transition-transform hover:scale-110 duration-300">
            <a href="https://twitter.com/" target="_blank">
              <img src="./telegram.png" className="w-full"></img>
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <div className="w-[20rem] md:w-[25rem] lg:w-[27.5rem] xl:w-[32.5rem] 2xl:w-[35rem] 3xl:w-[37.5rem] animate-bounce mt-[10rem] md:mt-[10rem] lg:mt-[10rem] xl:mt-[10rem] 2xl:mt-[10rem] 3xl:mt-[12.5rem]">
          <img src="./steve.png" className="w-full"></img>
        </div>
        <div className="ribeye-marrow-regular text-base md:text-base lg:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl text-center mt-[1.5rem] md:mt-[1.75rem] lg:mt-[2rem] xl:mt-[2.5rem] 2xl:mt-[3rem] 3xl:mt-[3.5rem]">
          The Matt Furie's Boy's club #1 provider. U need something? call Steve.
        </div>

        <div className="w-[7rem] md:w-[7rem] lg:w-[8rem] xl:w-[10rem] 2xl:w-[12.5rem] 3xl:w-[13rem] transition-transform hover:scale-110 duration-300 mt-[1.25rem] lg:mt-[1.5rem] xl:mt-[1.75rem] 2xl:mt-[2rem]">
          <a href="https://twitter.com/" target="_blank">
            <img src="./buy.png" className="w-full"></img>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
