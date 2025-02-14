import Footer from "./Footer"
import Sidebar from "./SideBar"

const Contacts = () => {
  return (
    <div>
        <div className="min-h-screen mt-16">
            <div>
                <Sidebar />
            </div>
            <div>
                <h1 className="text-2xl font-bold text-amber-700 text-center p-4">
                    Contact US: 
                </h1>
                <div className="flex justify-center">
                <p className="p-16">
                    Personalize this website to match your style! Customize, tweak, and make it uniquely yours. Sleek, responsive, and built for YOU! Ready to stand out? Let’s make it happen!
                </p>
                </div>
                <div >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d229169.65614506535!2d27.875213428121533!3d-26.171427670020726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c68f0406a51%3A0x238ac9d9b1d34041!2sJohannesburg!5e0!3m2!1sen!2sza!4v1739451334233!5m2!1sen!2sza"
                    width="600"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
            </div>
        </div>
        <Footer />
        </div>
  )
}

export default Contacts