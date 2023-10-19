import { useEffect, useState } from "react";
import Brand from "../Brand/Brand";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    fetch("https://brand-shop-server-sand-two.vercel.app/brands")
      .then((res) => res.json())
      .then((data) => setBrands(data));
  }, []);

  // console.log(brands);

  return (
    <div className="mt-12 mb-32">
      <h1 className="text-2xl font-bold text-center uppercase">Our Brands</h1>
      <hr className="w-36 bg-[#1D9BF0] pt-[2px] mx-auto" />
      <div className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-wrap">
          {brands.map((brand) => (
            <Brand key={brand._id} brand={brand}></Brand>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
