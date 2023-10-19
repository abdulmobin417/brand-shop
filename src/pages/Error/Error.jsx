import { Link } from "react-router-dom";
import "./Error.css";
import errorPage from '../../assets/error-pages.png'

const Error = () => {
  return (
    <div>
      <div className="h-screen overflow-hidden flex items-center justify-center bg-[#ff78f45e]">
        <div className="h-screen w-screen flex items-center">
          <div className="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
            <div className="max-w-md">
              <div className="text-5xl font-dark font-bold">404</div>
              <p className="text-2xl md:text-3xl font-light leading-normal">
                Sorry we {"couldn't"} find this page.
              </p>
              <p className="mb-8">
                But {"don't"} worry, you can find plenty of other things on our
                homepage.
              </p>

              <Link to="/">
                <button className="px-4 inline py-2 text-sm font-medium leading-5 shadow text-[#FFF] transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-slate-600 active:bg-blue-600 hover:bg-blue-700">
                  back to home
                </button>
              </Link>
            </div>
            <div className="max-w-lg">
              <img src={errorPage} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
