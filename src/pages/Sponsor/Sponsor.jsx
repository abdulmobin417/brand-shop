import sponsor1 from "../../assets/sponsor-1.png";
import sponsor2 from "../../assets/sponsor-2.png";
import sponsor3 from "../../assets/sponsor-3.png";
import sponsor4 from "../../assets/sponsor-4.png";
import sponsor5 from "../../assets/sponsor-5.png";
import sponsor6 from "../../assets/sponsor-6.png";

const Sponsor = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <h1 className="text-5xl font-bold text-center pb-4">
        Our Great Sponsor
      </h1>
      <div className="mt-8">
        <div className="grid grid-cols-2 sm:grid-cols-3">
          <div className="sm:border-r-2 sm:border-b-2">
            <img src={sponsor1} alt="" />
          </div>
          <div className="sm:border-r-2 sm:border-b-2">
            <img src={sponsor2} alt="" />
          </div>
          <div className="sm:border-b-2">
            <img src={sponsor3} alt="" />
          </div>
          <div className="sm:border-r-2">
            <img src={sponsor4} alt="" />
          </div>
          <div className="sm:border-r-2">
            <img src={sponsor5} alt="" />
          </div>
          <div>
            <img src={sponsor6} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
