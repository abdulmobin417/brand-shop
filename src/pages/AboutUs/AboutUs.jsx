import { Link } from "react-router-dom";
import aboutUs from '../../assets/about-us.png'

const AboutUs = () => {
  return (
    <div className="dark:bg-gray-900 ">
      <div className="flex flex-col lg:flex-row gap-10 items-center py-16 px-10 xl:px-16 text-center sm:text-left max-w-6xl mx-auto">
        <div>
          <p className="text-gray-500 dark:text-white font-medium tracking-widest mb-2">
            ABOUT US
          </p>
          <h1 className="text-5xl dark:text-white font-medium leading-[55px] mb-4 max-w-[500px]">
            Helping businesses deliver exceptional buyer experiences.
          </h1>
          <p className="text-gray-600 dark:text-white max-w-[920px] mb-4">
            Brand Shop is the leading car selling and asynchronous
            communications platform for buying cars. Millions of sales
            professionals and more than 250,000 go-to-market for buying our
            brand shop car and digital sales rooms to connect with more
            prospects and generate more revenue.
          </p>
          <Link to="/">
            <button className="bg-purple-600 text-white font-semibold px-4 py-3 rounded-md">
              Explore More
            </button>
          </Link>
        </div>
        <div className="">
          <img className="" src={aboutUs} alt="" />
        </div>
      </div>
      <div className="bg-[#f3f5fa]">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 py-16 px-10 xl:px-16 text-center sm:text-left">
          <h2 className="text-3xl font-semibold">
            Built for go-to-market teams, powered by Brand Shop
          </h2>
          <div className="space-y-6">
            <p className="max-w-[810px] text-gray-500 font-medium">
              We believe in the power of Car to foster human connections and
              empower go-to-market professionals to deliver trusted and
              productive buyer experiences.
            </p>
            <p className="max-w-[810px] text-gray-500 font-medium">
              We also believe in the power of AI to help sales and marketing
              teams unlock their creativity and connect with more prospects than
              ever before.
            </p>
            <p className="max-w-[810px] text-gray-500 font-medium">
              We’re committed to helping our customers grow their revenue faster
              by unleashing the potential of video and AI.
            </p>
          </div>
        </div>
        {/* <div className="border mb-10 mx-20"></div> */}
      </div>
    </div>
  );
};

export default AboutUs;
