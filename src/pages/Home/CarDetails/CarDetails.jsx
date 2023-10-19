import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";

const CarDetails = () => {
  const loadedCarDetails = useLoaderData();

  // console.log(loadedCarDetails);
  const { name, photo, ratings, price, _id, brand, category, description } =
    loadedCarDetails;

  const { user } = useContext(AuthContext);

  const handleAddToCart = () => {
    fetch(
      "https://brand-shop-server-cx9hc7o3u-abdul-mobins-projects.vercel.app/carts",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          productId: _id,
          productName: name,
          productPhoto: photo,
          productRating: ratings,
          productPrice: price,
          productBrand: brand,
          productCategory: category,
          quantity: 1,
          userName: user?.displayName,
          userEmail: user?.email,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data._id) {
          toast.success("Car Added to Cart Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
        console.log(data);
      });
  };
  return (
    <div className="my-20">
      <h1 className="text-2xl font-bold text-center uppercase">
        Product Details
      </h1>
      <hr className="max-w-[230px] bg-yellow-300 pt-[2px] mx-auto" />
      <div className="flex flex-col justify-center items-center my-12 min-w-screen min-h-[600px] bg-yellow-300 dark:bg-gray-900">
        <div className="flex items-center p-5 lg:p-10 overflow-hidden relative">
          <div className="w-full max-w-6xl rounded bg-white shadow-xl p-10 lg:p-20 mx-auto text-gray-800 relative md:text-left">
            <div className="md:flex items-center -mx-10">
              <div className="w-full md:w-1/2 px-10 mb-10 md:mb-0">
                <div className="relative">
                  <img src={photo} className="w-full relative z-10" alt="" />
                  <div className="border-4 border-yellow-200 absolute top-10 bottom-10 left-10 right-10 z-0"></div>
                </div>
              </div>
              <div className="w-full md:w-1/2 px-10">
                <div className="mb-10">
                  <h1 className="font-bold uppercase text-2xl mb-5">{name}</h1>
                  <p className="text-sm">{description}</p>
                </div>
                <div>
                  <div className="inline-block align-bottom mr-5">
                    <span className="text-2xl leading-none align-baseline">
                      $
                    </span>
                    <span className="font-bold text-4xl leading-none align-baseline">
                      {price}
                    </span>
                    <span className="text-2xl leading-none align-baseline">
                      .00
                    </span>
                  </div>
                  <div className="inline-block align-bottom">
                    <Link to={`/carDetails/${loadedCarDetails._id}`}>
                      <button
                        onClick={handleAddToCart}
                        className="bg-yellow-300 dark:bg-gray-900 opacity-75 hover:opacity-100 text-yellow-900 dark:text-white hover:text-gray-900 rounded-full px-10 py-2 font-semibold"
                      >
                        <i className="mdi mdi-cart -ml-2 mr-2"></i> Add To Cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-8">
          <Link to={`/updateCar/${loadedCarDetails._id}`}>
            <button className="bg-black dark:bg-purple-600 mt-2 px-8 py-3 rounded-lg text-lg font-semibold text-white hover:bg-purple-600 dark:hover:bg-yellow-300">
              Update Car
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
