import SideBar from "./SideBar";
import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("");
  const [artists, setArtists] = useState([]);
  let nextId = artists.length > 0 ? artists[artists.length - 1].id + 1 : 0;

  return (
    <div>
      <div className="min-h-screen mt-16">
        {/* Side bar */}
        <div>
          <SideBar />
        </div>

        {/* Header */}
        <h1>Inspiring sculptors:</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter artist name"
        />
        <button
          onClick={() => {
            if (name.trim()) {
              setArtists([...artists, { id: nextId, name }]);
              setName(""); // Clear input field after adding
            }
          }}
        >
          Add
        </button>
        <ul>
          {artists.map((artist) => (
            <li key={artist.id}>{artist.name}</li>
          ))}
        </ul>

        {/* Body */}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
