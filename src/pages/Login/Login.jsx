import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import banner from "../../assets/loginImg.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { toast } from "react-toastify";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, googleSignIn, githubSignIn } = useContext(AuthContext);
  const emailRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // console.log(email, password);

    signIn(email, password)
      .then(() => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch(() => {
        // console.log(err);
        toast.error("Invalid Email or Password", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };

  const handleForgotPassword = () => {
    console.log(emailRef.current.value);
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then(() => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleGithubSignIn = () => {
    githubSignIn(githubProvider)
      .then(() => {
        toast.success("Login Successful", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="grid md:grid-cols-2">
      <div className="bg-yellow-300 dark:bg-gray-900 dark:text-white hidden md:block">
        <div className="px-16 flex flex-col justify-center items-center pt-14">
          <div className="mb-10">
            <h1 className="text-4xl xl:text-6xl font-bold mb-6">
              See what
              <br></br> {`It's happening now`}
            </h1>
            <p className="text-2xl xl:text-3xl font-semibold">
              Sign Up for Brand Shop Today
            </p>
          </div>
          <img className="max-w-[430px] px-8" src={banner} alt="" />
        </div>
      </div>
      <div className="bg-[#FFF] pt-14 px-8 lg:px-20 xl:px-[120px] pb-14">
        <div className="flex justify-between items-center">
          <p>Brand Shop</p>
          <p className="hidden sm:block">
            {`Don't`} have an account?{" "}
            <Link
              className="text-yellow-400 dark:text-gray-900 font-semibold"
              to="/register"
            >
              Sign up
            </Link>
          </p>
        </div>
        <div className="mt-12 px-2">
          <h1 className="text-[#212121] text-5xl xl:text-6xl font-semibold mb-10">
            Discover what {`It's`} trending
          </h1>
          <p className="text-[#757575] text-2xl font-semibold mb-4">
            Login to Brand Shop
          </p>
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="">
              <input
                type="email"
                name="email"
                ref={emailRef}
                className="w-full bg-[#EEEEEE] px-6 py-4 rounded placeholder:text-[#757575] placeholder:text-sm"
                placeholder="Enter Your Email"
              />
            </div>
            <div className="relative">
              <div className="">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="w-full bg-[#EEEEEE] px-6 py-4 rounded placeholder:text-[#757575] placeholder:text-sm"
                  placeholder="Enter Your Password"
                />
              </div>
              <span
                className="absolute top-1/2 -translate-y-1/2 right-12"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
            <div className="text-right max-w-[1020px]">
              <span
                className="text-[#212121] text-sm hover:underline hover:cursor-pointer hover:text-[#1D9BF0]"
                onClick={handleForgotPassword}
              >
                Forget your password?
              </span>
            </div>
            <div className="pt-7">
              <input
                className="w-full py-4 font-semibold rounded bg-yellow-300 dark:bg-gray-900 dark:text-[#FFF] hover:bg-yellow-400 dark:hover:bg-gray-700 cursor-pointer"
                type="submit"
                value="Connect Now"
              />
            </div>
          </form>
          <div>
            <p className="block sm:hidden mt-4">
              {`Don't`} have an account?{" "}
              <Link
                className="text-yellow-400 dark:text-gray-900 font-semibold"
                to="/register"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="py-12 flex items-center gap-2 justify-center">
            <div className="h-[1px] w-[50%] sm:w-[220px] border border-[#42424265]"></div>
            <p className="text-[#424242] text-sm font-medium">Or</p>
            <div className="h-[1px] w-[50%] sm:w-[220px] border border-[#42424265]"></div>
          </div>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            <button onClick={handleGoogleSignIn}>
              <div className="bg-[#E7EAEE] flex gap-3 items-center px-4 py-3 rounded">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <rect width="24" height="24" fill="#E7EAEE" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23.04 12.2614C23.04 11.4459 22.9668 10.6618 22.8309 9.90909H12V14.3575H18.1891C17.9225 15.795 17.1123 17.013 15.8943 17.8284V20.7139H19.6109C21.7855 18.7118 23.04 15.7636 23.04 12.2614Z"
                    fill="#4285F4"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 23.4998C15.105 23.4998 17.7081 22.4701 19.6109 20.7137L15.8943 17.8282C14.8645 18.5182 13.5472 18.926 12 18.926C9.00474 18.926 6.46951 16.903 5.56519 14.1848H1.72314V17.1644C3.61542 20.9228 7.50451 23.4998 12 23.4998Z"
                    fill="#34A853"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.56523 14.1851C5.33523 13.4951 5.20455 12.758 5.20455 12.0001C5.20455 11.2421 5.33523 10.5051 5.56523 9.81506V6.83551H1.72318C0.944318 8.38801 0.5 10.1444 0.5 12.0001C0.5 13.8557 0.944318 15.6121 1.72318 17.1646L5.56523 14.1851Z"
                    fill="#FBBC05"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 5.07386C13.6884 5.07386 15.2043 5.65409 16.3961 6.79364L19.6945 3.49523C17.7029 1.63955 15.0997 0.5 12 0.5C7.50451 0.5 3.61542 3.07705 1.72314 6.83545L5.56519 9.815C6.46951 7.09682 9.00474 5.07386 12 5.07386Z"
                    fill="#EA4335"
                  />
                </svg>
                <p className="text-[#000000bf] text-sm font-semibold">
                  Sign In with Google
                </p>
              </div>
            </button>
            <button onClick={handleGithubSignIn}>
              <div className="bg-yellow-300 dark:text-[#FFF] dark:bg-gray-900 flex gap-3 items-center px-4 py-3 rounded">
                <BsGithub className="text-[23px]" />
                <p className="text-sm font-semibold">Sign In with Github</p>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Login;
