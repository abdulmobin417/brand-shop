import banner from "../../../assets/banner.jpg";

const Hero = () => {
  return (
    <div>
      <section className="dark:bg-gray-800 dark:text-gray-100 bg-yellow-300 rounded-lg">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-12 lg:flex-row lg:justify-evenly">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
            <h1 className="text-5xl font-bold leadi sm:text-6xl">
              Welcome
              <span className="dark:text-violet-400"> To</span> Our Brand Shop
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12">
              You can find luxury cars and also
              <br className="hidden md:inline lg:hidden" />
              your desired dream cars. In a high performance engine the exhaust
              pipes are tuned to allow for both the exhaust to exit the engine
              and to help draw in more fuel/air mixture.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-yellow-200 shadow-xl"
              >
                Suspendisse
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                className="px-8 py-3 text-lg font-semibold border-2 border-white rounded dark:border-gray-100"
              >
                Malesuada
              </a>
            </div>
          </div>
          <div className="max-w-[800px]">
            <img src={banner} alt="" className="w-full rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
