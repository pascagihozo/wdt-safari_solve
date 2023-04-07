import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-border-gray-700 shadow">
      <div className="container mx-auto px-4 py-4 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white-800">
           SafariSolve
          </Link>
          <button
            type="button"
            className="block md:hidden text-white-800 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
            onClick={toggleNavbar}
          >
            <svg viewBox="0 0 20 20" className="w-6 h-6 fill-current">
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15 4.414l-.707-.707L10 8.586 5.707 4.293 5 5l5 5-5 5 .707.707L10 11.414l4.293 4.293.707-.707L10.414 10l4.293-4.293z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 5h14v2H3V5zm0 6h14v2H3v-2z"
                />
              )}
            </svg>
          </button>
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } md:block md:flex md:items-center`}
          >
            <Link
              to="/about"
              className="block mt-4 md:inline-block md:mt-0 text-white-800 hover:text-gray-700 mx-4"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block mt-4 md:inline-block md:mt-0 text-white-800 hover:text-gray-700 mx-4"
            >
              Contact
            </Link>
            <Link
              to="/comparator"
              className="block mt-4 md:inline-block md:mt-0 text-white-800 hover:text-gray-700 mx-4"
            >
              Country facts
            </Link>
            
            <Link
              to="/city"
              className="block mt-4 md:inline-block md:mt-0 text-white-800 hover:text-gray-700 mx-4"
            >
              City
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
