import Footer from "./Footer"
import Sidebar from "./SideBar"

const About = () => {
  return (
    <div >
        <div className="mt-16 min-h-screen ">
        <div>
            <Sidebar />
        </div>
        <h1 className="text-2xl font-bold text-amber-700 text-center p-8">
                About
            </h1>

        <div className="p-4 flex justify-center items-center">
        <h1 className="text-2xl font-bold text-amber-700 text-center p-4">
                why Us ?
            </h1>

            <p className="w-1/2 p-2 border-r-2 border-amber-100">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="text-2xl font-bold text-amber-700 text-center p-4">
                Vision
            </h1>

            <p className="w-1/2 p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="p-16">
        <h1 className="text-2xl font-bold text-amber-700 text-center p-4">
                Mission
            </h1>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className="flex justify-center">
        <h1 className="w-full text-2xl font-bold text-amber-700 text-center p-4">
                Who are we?
            </h1>
            <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        </div>

        <Footer />
    </div>
  )
}

export default About