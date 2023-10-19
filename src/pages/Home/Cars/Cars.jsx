import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cars = ({ car }) => {
  return (
    <div className="flex">
      <div className="transition duration-300 transform bg-yellow-300 dark:bg-gray-900 shadow-2xl hover:scale-105 md:shadow-xl hover:shadow-2xl rounded-lg flex flex-col dark:text-[#FFF]">
        <div className="h-[210px]">
          <img src={car.photo} className="h-full w-full rounded-t-lg" alt="" />
        </div>
        <div className="my-3 px-2">
          <h1 className="text-xl font-bold">{car.name}</h1>
          <div className="flex justify-between my-3">
            <p className="text-sm font-medium">
              Brand:{" "}
              <Link to={`/brandDetails/${car.brand}`} className="">
                {car.brand}
              </Link>
            </p>
            <p className="text-sm font-medium">Type: {car.category}</p>
          </div>
          <div className="mb-4">
            <p>{car.description}</p>
          </div>
        </div>
        <div className="mt-auto">
          <div className="mt-auto px-2 flex justify-between items-center">
            <p className="text-xl font-extrabold">Price: ${car.price}</p>
            <p className="font-bold">Ratings: {car.ratings}</p>
          </div>
          <div className="flex justify-between items-center px-4 mb-4">
            <Link to={`/carDetails/${car._id}`}>
              <button className="bg-black dark:bg-purple-600 shadow-inner mt-4 px-4 py-3 rounded-lg text-lg font-semibold text-white">
                See Details
              </button>
            </Link>
            <Link to={`/updateCar/${car._id}`}>
              <button className="border-2 border-black dark:border-purple-600 shadow-inner mt-4 px-8 py-3 rounded-lg text-lg font-semibold dark:text-white text-black">
                Update
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Cars.propTypes = {
  car: PropTypes.object,
};

export default Cars;
