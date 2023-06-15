import React, { useContext, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Slidebar from "./Slidebar";
import { Link } from "react-router-dom";
import SearchContext from "../context/SearchContext";
import logo from "../ShopSmartLogo.png";
function Navbar() {
  const [nav, setNav] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const { updateQuery } = useContext(SearchContext);

  const EventLinks = [
    { Event: "Home", Link: "/", icons: "" },
    { Event: "Clothes", Link: "/clothes", icons: "" },
    { Event: "Electronic", Link: "/electronic", icons: "" },
    { Event: "Furniture", Link: "/furniture", icons: "" },
    { Event: "Sunglasses", Link: "/sunglasses", icons: "" },
  ];
  const handlemenuicon = () => {
    setNav(!nav);
  };
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchbutton = (event) => {
    localStorage.setItem("query", searchTerm);
    updateQuery(searchTerm);
    setSearchTerm("");
  };
  return (
    <>
      <nav className="bg-black fixed w-full z-10">
        <div className="max-w-980 h-12 mx-auto text-white flex justify-between pr-3 pl-3">
          <div
            className="flex text-2xl items-center md:hidden transition-colors duration-1000 ease-in-out"
            onClick={handlemenuicon}
          >
            {nav ? <IoMenuOutline /> : <RxCross2 />}
          </div>
          <div className="flex h-full items-center" id="logo">
            <Link to="/">
              <img alt="loding" src={logo} className="w-14 h-10"></img>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex h-full items-center">
              {EventLinks.map((EventLinks) => (
                <Link
                  to={EventLinks.Link}
                  className="pl-2 pr-2"
                  key={EventLinks.Link}
                >
                  <li className="">{EventLinks.Event}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex max-w-10 justify-between h-full items-center">
            <form>
              <div className="flex">
                {" "}
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                  className=" text-black px-2 py-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <Link to="/search" className="text-white">
                  <AiOutlineSearch
                    className="inline-block align-middle text-xl"
                    onClick={handleSearchbutton}
                  ></AiOutlineSearch>
                </Link>
              </div>
            </form>
          </div>
          <div className="flex max-w-10 justify-between h-full items-center">
            <Link to="/cart">
              <div className="ml-2 mr-2">
                <BsBag />
              </div>
            </Link>
          </div>
        </div>
      </nav>
      <Slidebar nav={nav} />
    </>
  );
}

export default Navbar;
