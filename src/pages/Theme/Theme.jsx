import { useEffect, useState } from "react";

function Theme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
    {
      icon: "desktop-outline",
      text: "system",
    },
  ];

  const onWindowMatch = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  };

  onWindowMatch();

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
        onWindowMatch();
        break;
    }
  }, [element.classList, theme]);
  return (
    <div className="">
      <div className="bg-white dark:bg-slate-900 h-full w-full absolute duration-100">
        <div className="fixed top-5 right-10 duration-100 dark:bg-slate-800 bg-gray-100 rounded">
          {options?.map((option) => (
            <button
              key={option.text}
              onClick={() => setTheme(option.text)}
              className={`w-8 h-9 leading-9 text-xl rounded-full m-1 ${
                theme === option.text && "text-sky-500"
              }`}
            >
              <ion-icon name={option.icon}></ion-icon>
            </button>
          ))}
        </div>
        <div className="bg-white dark:bg-slate-800 m-20 rounded-lg p-12 ring-1 ring-slate-900/5 shadow-xl">
          <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
            Writes Upside-Down
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
            The Zero Gravity Pen can be used to write in any orientation,
            including upside-down. It even works in outer space.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Theme;
