import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap p-4 shadow bg-blue-600">
        <div className="text-white mr-6">
          <h1 className="text-2xl font-display leading-normal">
            Water Exchange
          </h1>
          <h4 className="text-sm font-display leading-normal">
           By The Water Agency, Inc.
          </h4>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white hover:border-white"
            onClick={() => setExpanded(!expanded)}
          >
            <svg
              className="fill-current h-6 w-6"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>

        <div
          className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
            !expanded && "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <Link to="/listings">
              <button className={`block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4`}>
                Listings
              </button>
            </Link>
            <Link to="/recieved-offers">
              <button className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4">
                Recieved Offers
              </button>
            </Link>
            <Link to="/sent-offers">
              <button className="block mt-4 lg:inline-block lg:mt-0 text-blue-200 text-base font-display hover:text-white mr-4">
                Sent Offers
              </button>
            </Link>
            {/* <Link href="/hire-me" passHref>
              <a className="block mt-4 lg:inline-block lg:mt-0 text-orange-200 text-base font-display hover:text-white">
                Hire Fritz
              </a>
            </Link> */}
          </div>
          <div>
            {/* <Link href="/mailing-list" passHref>
              <a className="inline-block text-sm px-4 py-4 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-600 hover:bg-white mt-4 lg:mt-0">
                Join My Mailing List!
              </a>
            </Link> */}
          </div>
        </div>
      </nav>
    </header>
  );
};
