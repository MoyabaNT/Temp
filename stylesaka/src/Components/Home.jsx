import SideBar from "./SideBar"

const Home = () => {
  return (
    <div>
        <div className="min-h-screen mt-16">
                {/**Side bar */}
            <div className=" ">
                <SideBar />
            </div>

            {/**header */}
            <div className="flex justify-center">
                <h1 className="">
                Header
                </h1>
            </div>
                {/**Body */}
            <div className="">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 p-8 items-center">
                <div className="rounded-full shadow-lg p-6 w-80 h-80 flex items-center justify-center ">
                fisrt card
                    </div>
                    <div className="rounded-full shadow-lg p-6 w-80 h-80 flex items-center justify-center ">
                second card
                    </div>
                    <div className="rounded-full shadow-lg p-6 w-80 h-80 flex items-center justify-center ">
                Third card
                    </div>
            </div>

            </div>
        </div>
    </div>

  )
}

export default Home