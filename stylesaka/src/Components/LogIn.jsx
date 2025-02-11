import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const LogIn = () => {
  const [username, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  function vali(event) {
    event.preventDefault(); //prevents the form from submitting itself and crashing the page
    alert("Thank you Ms " + username + " for submitting");
    console.log(username, password, email);
  }

  return (
    <div className="flex h-screen justify-center items-center ">
      {/* Form Container */}
      <div name="firstCard" className="w-full sm:w-3/4 md:w-1/2 lg:w-1/3 flex flex-col justify-center items-center p-8 border-r-1 border-amber-100">
        <div className="bg-amber-100 rounded-lg w-full p-6 sm:p-8 text-left">
          <form name="formo" onSubmit={vali} method="post">
            <h1 className="text-center text-amber-700 font-bold text-2xl sm:text-3xl">Welcome Back</h1>

            <div className="p-8 text-amber-700 flex justify-center">
              <FaRegUser size={100} />
            </div>

            <div className="p-2">
              <label className="text-amber-700 mb-1 p-2 text-lg">Username</label>
              <input
                type="text"
                name="fName"
                value={username}
                onChange={(e) => setName(e.target.value)}
                className="border border-amber-50 rounded-lg p-2 w-full focus:border-amber-500 focus:outline-none"
                required
              />
            </div>

            <div className="p-2">
              <label className="text-amber-700 p-2 text-lg">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-amber-50 rounded-lg p-2 w-full focus:border-amber-500 focus:outline-none"
                required
              />
            </div>

            <div className="p-2">
              <label className="text-amber-700 p-2 text-lg">Password</label>
              <input
                type="text"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border border-amber-50 rounded-lg p-2 w-full focus:border-amber-500 focus:outline-none"
                required
              />
            </div>

            <button
              name="submit"
              className="border border-amber-100 shadow-2xl rounded-lg mt-4 p-2 w-full sm:w-32 text-amber-600 bg-amber-700 font-bold"
            >
              Log In
            </button>
          </form>

          <div className="flex p-2 justify-center sm:justify-start mt-4">
            <p className="text-amber-800">Already have an account?</p>
            <button className="ml-2 text-amber-800 font-bold">Sign up</button>
          </div>
        </div>
      </div>

      {/* Second Card with Bouncing Effect */}
      <div name="secCard" className="hidden reletive w-1/2 md:flex justify-center items-center p-8">
        <div className="bg-amber-800 h-50 w-50 rounded-full animate-bounce" />
        <div className="w-200 h-1/2 absolute bottom-0 right-0 bg-white-10 backdrop-blur-lg"/>
</div>
    </div>
  );
};

export default LogIn;
