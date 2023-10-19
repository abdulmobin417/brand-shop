import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Header from "../pages/Shared/Header/Header";
import Footer from "../pages/Shared/Footer/Footer";
import "react-toastify/dist/ReactToastify.css";

const Root = () => {
  return (
    <div className="">
      <Header />
      <div className="max-w-screen-2xl mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
