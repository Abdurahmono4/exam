import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";

import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/fireBaseConfig";

import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const themes = { winter: "winter", dracula: 'dark' };

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function Navbar() {
  const { navbarBgColor, user } = useContext(GlobalContext);
  console.log("navbar color:", navbarBgColor);
const nav = useNavigate()
const [ref,setref]=useState();
  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  console.log(theme);

  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);

    // Apply background style for dracula theme
    if (theme === themes.dracula) {
      document.body.style.color = "white";
    } else {
      document.body.style.backgroundColor = "";
      document.body.style.color = ""; // Reset for winter theme
    }
  }, [theme]);

  return (
    <div
      className="bg-base-300 duration-300 transition"
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg hidden lg:flex ">
            MyKitchen
          </Link>
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn  btn-primary lg:btn-lg mt-3"
            >
              MK
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end flex gap-3">
          <div className="flex gap-10 items-center">
            <label className="swap swap-rotate">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                onClick={()=>handleClick()}
                defaultChecked={theme == "winter" ? true : false}
              />

              {/* sun icon */}
              <IoSunnyOutline className="w-8 h-8 swap-on fill-current" />

              {/* moon icon */}
              <IoMoonOutline className="w-8 h-8 swap-off fill-current" />
            </label>
          </div>

          {user && <p className="mr-3">{user.displayName}</p>}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={`${user.displayName ?? "user"}image`}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-300 rounded-box w-52"
            >
              <li>
                <button onClick={signOutFunc} className="btn btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
