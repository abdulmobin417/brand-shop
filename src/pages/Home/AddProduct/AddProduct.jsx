import { toast } from "react-toastify";

const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const brand = form.brandName.value;
    const category = form.category.value;
    const price = form.price.value;
    const photo = form.photoUrl.value;
    const description = form.description.value;
    const ratings = form.ratings.value;

    const newCar = {
      name,
      brand,
      category,
      price,
      photo,
      description,
      ratings,
    };

    // send data to the server
    fetch(
      "https://brand-shop-server-cx9hc7o3u-abdul-mobins-projects.vercel.app/car",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newCar),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.insertedId) {
          toast.success("Car Added Successful!", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          form.reset();
        }
      });
  };

  return (
    <div className="my-20">
      <div className="mb-14">
        <h1 className="text-2xl font-bold text-center uppercase">
          Add Your Own Product
        </h1>
        <hr className="max-w-xs bg-[#1D9BF0] pt-[2px] mx-auto mt-2" />
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-yellow-300 dark:bg-gray-900  p-4 sm:p-6 md:p-10 rounded-md"
      >
        <div className="grid grid-cols-6 gap-6">
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Name*</p>
            <input
              className="w-full rounded-md pl-2 py-2 outline-none"
              type="text"
              name="name"
              id="name"
              placeholder="Product Name"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Brand Name*</p>
            <input
              className="w-full rounded-md pl-2 py-2 outline-none"
              type="text"
              name="brandName"
              id="brandName"
              placeholder="Brand Name"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Category*</p>
            <input
              className="w-full rounded-md  pl-2 py-2 outline-none"
              type="text"
              name="category"
              id="category"
              placeholder="Category"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Price*</p>
            <input
              className="w-full rounded-md pl-2 py-2 outline-none"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Photo URL*</p>
            <input
              className="w-full rounded-md pl-2 py-2 outline-none"
              type="text"
              name="photoUrl"
              id="photoUrl"
              placeholder="Photo URL"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full sm:col-span-3 lg:col-span-2">
            <p className="text-xl pb-1 dark:text-[#FFF]">Ratings out of 5*</p>
            <input
              className="w-full rounded-md pl-2 py-2 outline-none"
              type="text"
              name="ratings"
              id="ratings"
              placeholder="Rating"
              required
            />
            <br></br>
          </div>
          <div className="col-span-full">
            <p className="text-xl pb-1 dark:text-[#FFF]">Short Description*</p>
            <textarea
              className="w-full rounded-md pl-2 py-2 outline-none resize-none"
              type="text"
              name="description"
              id="description"
              placeholder="Description..."
              required
              rows="7"
            />
            <br></br>
          </div>
        </div>
        <div>
          <input
            className="bg-black dark:bg-purple-600 text-white px-8 py-2 my-4 rounded hover:cursor-pointer font-bold"
            type="submit"
            value="Add Product"
          />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
