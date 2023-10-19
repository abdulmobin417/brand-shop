import { Link, useLoaderData } from "react-router-dom";
import Advertisements from "./Advertisements/Advertisements";
import { useEffect, useState } from "react";
import Cars from "../Cars/Cars";

const BrandDetails = () => {
  const loadedBrand = useLoaderData();
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch(
      `https://brand-shop-server-sand-two.vercel.app/car/${loadedBrand.name}`
    )
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, [loadedBrand]);

  // console.log(cars);

  return (
    <div className="container mx-auto">
      <div className="mb-20">
        <Advertisements loadedBrand={loadedBrand}></Advertisements>
      </div>
      <h1 className="text-2xl font-bold text-center uppercase">
        Brand Products
      </h1>
      <hr className="w-56 bg-[#1D9BF0] pt-[2px] mx-auto mt-2" />
      {cars.length ? (
        <div className="my-10 mb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {cars.map((car) => (
            <Cars key={car._id} car={car} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center mt-16 mb-24">
          <p className="text-center text-2xl py-4">
            No Cars available at this moment
          </p>
          <Link to="/">
            <button className="btn bg-[#d1a054] text-white hover:bg-gray-600">
              Go to Home Page
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BrandDetails;
