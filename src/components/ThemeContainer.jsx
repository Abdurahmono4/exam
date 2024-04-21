// ThemeContainer.js

import React, { useState, useContext, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa"; // Make sure these imports are correct
import { GlobalContext } from "../context/useGlobalContext";

const colors = ["#8DECB4", "#F0EBE3", "#59D5E0"];

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function ThemeContainer() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  const { dispatch } = useContext(GlobalContext);

  const handleChangeColor = (color) => {
    dispatch({
      type: "CHANGE_NAVBAR_BG",
      payload: color,
    });
  };

  const handleToggleTheme = () => {
    const newTheme = theme === themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    localStorage.setItem("mode", newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="mb-10 py-3">
      <div className="align-element flex justify-between items-center">
        {/* Color options */}
        <div className="flex flex-row gap-2">
          {colors.map((color) => (
            <div
              key={color}
              onClick={() => handleChangeColor(color)}
              className="h-7 w-7 rounded-full cursor-pointer"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>

        {/* Theme toggle */}
        <label className="swap swap-rotate">
          <input type="checkbox" onClick={handleToggleTheme} />
          <FaSun className="swap-on fill-current w-7 h-7" />
          <FaMoon className="swap-off fill-current w-7 h-7" />
        </label>
      </div>
    </div>
  );
}

export default ThemeContainer;
