import Home from "./Components/Home"
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider, Route
} from "react-router-dom";
import LogIn from "./Forms/LogIn";
import SignUp from "./Forms/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route index='/LogIn' element={<LogIn />} />
    <Route path='/Home' element={<Home />} />
    <Route path='/LogIn' element={<LogIn />} />
    <Route path='/SignUp' element={<SignUp />} />

    </>
  )
)

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App