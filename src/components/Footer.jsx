import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 px-4 pt-10 pb-6 bottom-0">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="md:w-1/2 mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white mb-2">About Us</h3>
          <p className="text-gray-400">Safari Solve travel website developed by Pascal Gihozo</p>
        </div>
        <div className="md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-bold text-white mb-2">Contact Us</h3>
          <p className="text-gray-400">Email: info@safarisolve.com</p>
          <p className="text-gray-400">Phone: +230 542980</p>
        </div>
        <div className="md:w-1/4">
          <h3 className="text-lg font-bold text-white mb-2">Follow Us</h3>
          <div className="flex items-center">
            <a href="https://www.facebook.com/gihozo.pascal.96/" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-facebook fa-lg">Facebook</i>
            </a>
            <a href="https://twitter.com/PASCALGIHOZO?t=CdafNcojgsQQFhKVGLo-RA&s=08" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-twitter fa-lg">Twitter</i>
            </a>
            <a href="https://www.instagram.com/pascalgihozo/" className="text-gray-400 hover:text-white mr-4">
              <i className="fab fa-instagram fa-lg">Instagram</i>
            </a>
          </div>
        </div>
      </div>
      <hr className="border-gray-700 my-6" />
      <div className="text-center">
        <p className="text-gray-400">© 2023 SafariSolve</p>
      </div>
    </footer>
  );
};

export default Footer;
