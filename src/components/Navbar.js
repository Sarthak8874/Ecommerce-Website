import React, { useContext, useState } from "react";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { BsBag } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import Slidebar from "./Slidebar";
// import SearchContext from '../context/SearchqueryContext'

function Navbar() {
  const [nav, setNav] = useState(true);
  // const {query, updateQuery} = useContext(SearchContext)
  const [searchTerm, setSearchTerm] = useState("");
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
    console.log(searchTerm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // onSearch(searchTerm);
  };

  const handleSearchbutton = () => {
    console.log(searchTerm);
    // searchTerm='';
    setSearchTerm("");
  };
  return (
    <>
      <nav className=" bg-black">
        <div className="max-w-980 h-12 mx-auto text-white flex justify-between pr-3 pl-3">
          <div
            className="flex text-2xl items-center md:hidden transition-colors duration-1000 ease-in-out"
            onClick={handlemenuicon}
          >
            {nav ? <IoMenuOutline /> : <RxCross2 />}
          </div>
          <div className="flex h-full items-center">
            <img alt="loding" src="/jfnj" className=""></img>
          </div>
          <div className="hidden md:block">
            <ul className="flex h-full items-center">
              {EventLinks.map((EventLinks) => (
                <a href={EventLinks.Link} className="pl-2 pr-2">
                  <li className="">{EventLinks.Event}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex max-w-10 justify-between h-full items-center">
            <form onSubmit={handleSubmit}>
              <div className="flex">
                {" "}
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleChange}
                  className="text-black"
                />
                <a href='/search' className="text-white">
                  <AiOutlineSearch
                    type="submit"
                    onClick={handleSearchbutton}
                  ></AiOutlineSearch>
                </a>
              </div>
            </form>
            <div className="ml-2 mr-2">
              <BsBag />
            </div>
          </div>
        </div>
      </nav>
      <Slidebar nav={nav} />
    </>
  );
}

export default Navbar;
