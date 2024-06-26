import { Link } from "react-router-dom";

const links = [
  {
    Id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Create",
    link: "/create",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
  {
    id: 4,
    text: "About",
    link: "/about",
  }
];

function NavLinks() {
  return (
    <>
     <Link className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
            to={"/"}
          >
            Home
          </Link>
          <Link className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
            to={"/create"}
          >
            Create
          </Link>
          <Link className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
            to={"/contact"}
          >
            Contact
          </Link>
          <Link className=" navlink px-3 py-2 hover:bg-base-content hover:text-white rounded-lg "
            to={"/about"}
          >
            About
          </Link>


    </>
  );
}

export default NavLinks;
