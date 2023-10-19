import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Brand.css";

const Brand = ({ brand }) => {
  // console.log(cars);
  return (
    <Link
      to={`/brandDetails/${brand._id}`}
      className="cd w-full h-64 relative overflow-hidden cursor-pointer  shadow-lg border-2"
      data-aos="fade-up"
    >
      <div className="flex justify-center items-center">
        <img src={brand.brand_logo} className=" h-64 p-4" alt="Shoes" />
      </div>
      <div
        className={`cd-body w-full h-full absolute top-0 bg-[#fff2004d] dark:bg-[#212121a5] backdrop-blur-[5px]`}
      >
        <div className="flex justify-center items-center mt-24">
          <button className="btn btn-lg bg-[#1D9BF0] hover:bg-blue-700 border-none text-white text-2xl">
            {brand.name}
          </button>
        </div>
      </div>
    </Link>
  );
};

Brand.propTypes = {
  brand: PropTypes.object,
};

export default Brand;
