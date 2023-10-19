import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

//

const MyCart = () => {
  const [carts, setCarts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(
      `https://brand-shop-server-sand-two.vercel.app/carts?email=${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        setCarts(data);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://brand-shop-server-sand-two.vercel.app/carts/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remainingData = carts.filter((cart) => cart._id !== id);
              setCarts(remainingData);
              toast.success("Item deleted successfully");
            }
          });
      }
    });
  };

  const totalPrice = carts
    .reduce((sum, item) => sum + item.quantity * item.productPrice, 0.0)
    .toFixed(2);
  // console.log(carts);
  return (
    <div className="my-20">
      <div className="text-center">
        <div className="max-w-[424px] h-1 bg-yellow-300 mx-auto my-4" />
        <h1 className="uppercase text-4xl text-black font-bold">My Cart</h1>
        <div className="max-w-[424px] h-1 bg-yellow-300 mx-auto my-4" />
      </div>
      <h3 className="text-center sm:text-right py-2 text-xl">
        Total Price: <span className="font-bold">${totalPrice}</span>
      </h3>
      <div className="overflow-x-auto rounded-t-xl">
        <table className="table text-center text-base border-2 border-yellow-300">
          <thead className="bg-yellow-300 text-black py-6 border-2 border-yellow-300">
            <tr className="uppercase border">
              <th>No</th>
              <th className="py-6">PRODUCT IMAGE</th>
              <th>PRODUCT NAME</th>
              <th>Quantity</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {carts.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div>
                    <p className="text-2xl py-4">No items in cart</p>
                    <Link to="/">
                      <button className="btn bg-[#d1a054] text-white hover:bg-gray-600">
                        Go to Home Page
                      </button>
                    </Link>
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {carts.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td className="py-6">
                      <div className="flex items-center justify-center space-x-3">
                        <div className="w-24 rounded">
                          <img src={item.productPhoto} />
                        </div>
                      </div>
                    </td>
                    <td>{item.productName}</td>
                    <td>{item.quantity}</td>
                    <td>
                      $
                      {(item.quantity * parseFloat(item.productPrice)).toFixed(
                        2
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(item._id)}
                        className="btn bg-red-600 text-white hover:text-[#D1A054] btn-md text-2xl"
                      >
                        <RiDeleteBinLine></RiDeleteBinLine>
                      </button>
                    </th>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
