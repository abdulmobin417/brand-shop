import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/logo.png";
import pic from "../../../assets/user.png";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut, userName } = useContext(AuthContext);
  // console.log(user);
  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  //dark mode

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = ["light", "dark"];

  const toggleTheme = () => {
    const currentIndex = options.indexOf(theme);
    const nextIndex = (currentIndex + 1) % options.length;
    const nextTheme = options[nextIndex];
    setTheme(nextTheme);
  };

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        break;
    }
  }, [element.classList, theme]);

  return (
    <div className="bg-[#fdfdfd]">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink
              href="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center mr-8"
            >
              <img src={logo} className="w-80" alt="" />
            </NavLink>
            <ul className="hidden space-x-10 lg:flex items-center">
              <li className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400">
                <NavLink
                  to="/"
                  aria-label="Our product"
                  title="Our product"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#1D9BF0] pb-2"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400">
                <NavLink
                  to="/addProduct"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#1D9BF0] pb-2"
                      : ""
                  }
                >
                  Add Product
                </NavLink>
              </li>
              <li className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400">
                <NavLink
                  to="/cart"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#1D9BF0] pb-2"
                      : ""
                  }
                >
                  My Cart
                </NavLink>
              </li>
              <li className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-teal-accent-400">
                <NavLink
                  to="/aboutUs"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "border-b-2 border-[#1D9BF0] pb-2"
                      : ""
                  }
                >
                  AboutUs
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="items-center hidden lg:flex">
            <div className="duration-100  rounded mr-3">
              <button
                onClick={toggleTheme}
                className="w-8 h-9 leading-9 text-xl rounded-full m-1"
              >
                <ion-icon
                  name={theme === "light" ? "sunny" : "moon"}
                ></ion-icon>
              </button>
            </div>
            <ul className="">
              {user ? (
                <div className="flex items-center gap-2">
                  <details className="dropdown">
                    <summary className="m-1 btn bg-[#FFF] border-0 hover:bg-[#FFF]">
                      {user?.photoURL ? (
                        <img
                          className="w-10 rounded-full"
                          src={user.photoURL}
                          alt=""
                        />
                      ) : (
                        <img className="w-10" src={pic || user.photo} alt="" />
                      )}
                    </summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-36 absolute right-0">
                      <div className="text-center">
                        {user.displayName || userName.name}
                      </div>
                      <li className="flex items-center">
                        <NavLink to="/login">
                          <button
                            onClick={handleSignOut}
                            className="px-4 py-2 text-white bg-[#1D9BF0] rounded-md"
                          >
                            Sign Out
                          </button>
                        </NavLink>
                      </li>
                    </ul>
                  </details>
                </div>
              ) : (
                <li className="inline-flex items-center justify-center bg-yellow-300 dark:bg-gray-900 h-12 px-6 font-medium tracking-wide dark:text-white transition duration-200 rounded shadow-inner bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
                  <NavLink
                    to="/login"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "" : ""
                    }
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
          <div className="flex items-center lg:hidden">
            <div className="duration-100  rounded mr-3">
              <button
                onClick={toggleTheme}
                className="w-8 h-9 leading-9 text-xl rounded-full m-1"
              >
                <ion-icon
                  name={theme === "light" ? "sunny" : "moon"}
                ></ion-icon>
              </button>
            </div>
            <div>
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                {user ? (
                  <div>
                    {user?.photoURL ? (
                      <img
                        className="w-16 sm:w-10 rounded-full"
                        src={user.photoURL}
                        alt=""
                      />
                    ) : (
                      <img className="w-10" src={pic || user.photo} alt="" />
                    )}
                  </div>
                ) : (
                  <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                    />
                    <path
                      fill="currentColor"
                      d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                    />
                  </svg>
                )}
              </button>
              {isMenuOpen && (
                <div className="absolute top-0 left-0 w-full z-10">
                  <div className="p-5 bg-white border rounded shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center flex-wrap">
                        <NavLink
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <img src={logo} className="w-64" alt="" />
                        </NavLink>
                        {user ? (
                          <div className="text-lg font-semibold text-center">
                            {user.displayName || userName.name}
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg
                            className="w-5 text-gray-600"
                            viewBox="0 0 24 24"
                          >
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul className="space-y-4">
                        <li>
                          <NavLink
                            to="/"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Home
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/addProduct"
                            aria-label="Our product"
                            title="Our product"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Add Product
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/cart"
                            aria-label="Product pricing"
                            title="Product pricing"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            My Cart
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            to="/aboutUs"
                            aria-label="About us"
                            title="About us"
                            className="font-medium tracking-wide text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            About us
                          </NavLink>
                        </li>
                        <li>
                          {user ? (
                            <button
                              onClick={handleSignOut}
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-yellow-300 dark:bg-gray-900 dark:text-white transition duration-200 rounded shadow-inner bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Login"
                              title="Login"
                            >
                              Sign Out
                            </button>
                          ) : (
                            <NavLink
                              to="/login"
                              className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-yellow-300 dark:bg-gray-900 dark:text-white transition duration-200 rounded shadow-inner bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                              aria-label="Login"
                              title="Login"
                            >
                              Login
                            </NavLink>
                          )}
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
