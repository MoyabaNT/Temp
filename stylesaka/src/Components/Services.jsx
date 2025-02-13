import Sidebar from "./SideBar";
import services from '../assets/TheFol/serv.jpg';
import Footer from "./Footer";

const Services = () => {
  return (
    <div className="mt-16">
      {/* Sidebar */}
        <div>
        <Sidebar />
        </div>

      {/* upper Content */}
      <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12">
        
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img 
            src={services} 
            alt="Services picture" 
            className="w-72 md:w-80 object-cover rounded-full"
          />
        </div>

        {/* options Section */}
        <div className="text-center md:text-left md:w-1/2 p-6">
          <h1 className="p-4 text-xl font-bold text-amber-700">What we offer</h1>
          <p className="text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div className="p-8">
            <h1 className="text-amber-700 font-bold p-2 text-xl text-center mb-4 ">Your options</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
                <p className="md:border-r-2 border-amber-100 p-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </p>
                <p className="md:border-r-2 border-amber-100 p-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="md:border-r-2 border-amber-100 p-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
    </div>
    <Footer />
    </div>
  );
};

export default Services;
