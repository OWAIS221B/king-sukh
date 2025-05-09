import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import SearchIcon from '@mui/icons-material/Search';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* About */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">About Us</h2>
          <p className="text-sm leading-relaxed">
            We create user-centric experiences that delight and inspire. Follow us for updates and exciting projects.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">Home</a></li>
            <li><a href="#" className="hover:text-white transition">Services</a></li>
            <li><a href="#" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition"><FacebookIcon /></a>
            <a href="#" className="hover:text-white transition"><TwitterIcon /></a>
            <a href="#" className="hover:text-white transition"><InstagramIcon /></a>
            <a href="#" className="hover:text-white transition"><LinkedInIcon /></a>
          </div>
        </div>

        {/* Search Bar */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Search</h2>
          <form className="flex items-center bg-gray-800 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-800 text-sm text-gray-200 placeholder-gray-400 px-3 py-2 w-full focus:outline-none"
            />
            <button type="submit" className="p-2 text-gray-300 hover:text-white">
              <SearchIcon />
            </button>
          </form>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
