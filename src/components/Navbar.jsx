import { useState, useEffect } from "react";
import { RiLoader2Line } from "react-icons/ri";
import { BiSun, BiSolidMoon } from "react-icons/bi";
const Navbar = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Check if theme preference is stored in localStorage
    const storedTheme = localStorage.getItem("theme");

    if (storedTheme) {
      setTheme(storedTheme);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };
  return (
    <div className="h-16 w-full  px-7 flex justify-between items-center">
      <div className="flex h-full items-center">
        <RiLoader2Line className="h-full text-4xl text-orange-400 animate-spin-slow" />
        <p className="my-auto text-3xl font-bold dark:text-white  mx-2 font-mono">SparkSumm</p>
      </div>
      <div onClick={handleThemeSwitch}>
        {theme === "dark" ? (
          <div>
            <BiSun className="dark:text-white text-3xl hover:cursor-pointer hover:animate-bounce" />
          </div>
        ) : (
          <BiSolidMoon className="dark:text-white text-3xl hover:cursor-pointer hover:animate-bounce    " />
        )}
      </div>
    </div>
  );
};

export default Navbar;
