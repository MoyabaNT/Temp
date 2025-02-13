import { useState } from "react";
import Sidebar from "./SideBar";
import { MdDeleteOutline } from "react-icons/md";
import Footer from "./Footer";

const Blog = () => {
    const [post, setPost] = useState("");
    const [submittedPost, setSubmittedPost] = useState([]); // Store submitted posts

    let savedPostId = submittedPost.length > 0 ? submittedPost[submittedPost.length - 1].id + 1 : 0;

    function postvali(event) {
        event.preventDefault();

        if (post.trim() === "") {
            alert("Write something to post");
            return;
        }

        // Add new post to the array
        setSubmittedPost([...submittedPost, { id: savedPostId, content: post }]);
        setPost(""); // Clear input field
    }

    function deletePost(id) {
        setSubmittedPost(submittedPost.filter(post => post.id !== id));
        alert("Post successfully deleted")
    }

    return (
        <div >
        <div className="mt-16 flex items-center justify-center p-8">
            <div>
                <Sidebar />
            </div>
            <div className="p-8 bg-amber-100 md:w-1/2 h-full rounded-md mt-8 hover:shadow-md shadow-amber-700">
                <label className=" font-bold text-amber-700">Write something...</label>
                <form onSubmit={postvali} method="post" className="p-6">
                    <input 
                        type="text" 
                        name="post" 
                        placeholder="What's on your mind?" 
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        className="shadow-sm shadow-amber-700 border border-amber-100 text-center w-full h-35 md:w-1/2 p-2 focus:border-amber-700 focus:outline-none" 
                    />
                    <input 
                        type="submit" 
                        value="Submit" 
                        className="ml-5 md:ml-30 mt-4 border-2 border-amber-100 shadow-sm font-bold text-amber-700 shadow-amber-700 rounded-md p-2 hover:border-amber-700" 
                    />
                </form>

                {/* Display submitted posts */}
                <div>
                    {submittedPost.length > 0 && (
                        <div className="mt-4 p-4 bg-white rounded-md shadow-md">
                            <h1 className="font-bold text-lg">You posted:</h1>
                            <ul>
                                {submittedPost.map((post) => (
                                    <li key={post.id} className="text-gray-800 border-b py-2 flex justify-between items-center">
                                        {post.content}
                                        <button 
                                            onClick={() => deletePost(post.id)} 
                                            className="ml-4 px-2 py-1 text-amber-100 rounded-md hover:text-amber-700 font-bold"
                                        >
                                            <MdDeleteOutline  size={20}/>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>

            <Footer />
        </div>
    );
};

export default Blog;
