import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-amber-700 text-white p-10 border-t-2 border-amber-100">
      {/* Footer Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Column 1 - Quick Links */}
        <div>
          <h1 className="text-amber-500 text-lg font-semibold mb-4">Quick Links</h1>
          <ul>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">Home</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">About Us</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">Services</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">Contact</li>
          </ul>
        </div>

        {/* Column 2 - Services */}
        <div>
          <h1 className="text-amber-500 text-lg font-semibold mb-4">Services</h1>
          <ul>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">Web Development</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">Graphic Design</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">SEO & Marketing</li>
            <li className="p-2 hover:text-amber-400 transition transform hover:scale-105">E-Commerce</li>
          </ul>
        </div>

        {/* Column 3 - Social Media */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-amber-500 text-lg font-semibold mb-4">Follow Us</h1>
          <div className="flex space-x-4">
            <FaFacebook className="text-2xl hover:text-amber-400 cursor-pointer transition transform hover:scale-110" />
            <FaTwitter className="text-2xl hover:text-amber-400 cursor-pointer transition transform hover:scale-110" />
            <FaInstagram className="text-2xl hover:text-amber-400 cursor-pointer transition transform hover:scale-110" />
            <FaLinkedin className="text-2xl hover:text-amber-400 cursor-pointer transition transform hover:scale-110" />
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center mt-8 text-gray-400 text-sm">
        &copy; 2025 Your Company Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
