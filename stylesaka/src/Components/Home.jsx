import Footer from "./Footer";
import SideBar from "./SideBar";
import fun from '../assets/TheFol/fun.jpg';


const Home = () => {

  return (
    <div>
      <div className="min-h-screen mt-16">
        {/* Side bar */}
        <div>
          <SideBar />
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 p-10 ">
            <div className="w-80 ">
                <img src={fun} alt="the people" className="rounded-4xl hover:shadow-lg shadow-amber-700"/>
            </div>
            <div className=" transform transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-4 hover:shadow-md shadow-amber-600 rounded-md">
                <h1 className="text-2xl font-bold text-amber-700 p-2">Heading</h1>
                <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

                </p>
            </div>
            <div className="mt-20 transform transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 p-4 hover:shadow-md shadow-amber-600 rounded-md">
            <h1 className="text-2xl font-bold text-amber-700 p-2">Heading</h1>

                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
            <div className=" md:flex justify-center p-16">
                <h1 className="text-2xl font-bold text-amber-700 p-6">Heading</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
            <div className=" md:flex justify-center p-16">
            <h1 className="md:hidden text-2xl font-bold text-amber-700 p-6">Heading</h1>

                <p className="md:text-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <h1 className="hidden md:flex text-2xl font-bold text-amber-700 p-6">Heading</h1>

            </div>

      </div>
      <Footer />
    </div>
  );
};

export default Home;
