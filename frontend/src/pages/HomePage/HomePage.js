import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayEntries from "../../components/DisplayEntries/DisplayEntries";
import axios from "axios";
import JournalEntryForm from "../../components/AddEntryModal/AddEntryModal";
import MoodTracker from "../../components/MoodTracker/MoodTracker";
import "./HomePage.css";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [entry, setEntries] = useState([]);
  const [open, setOpen] = useState(false);
  const [collapsible, setCollapsible] = useState(false);

  useEffect(() => {
    getEntries();
  }, []);

  async function getEntries() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/addEntry/`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
    setEntries(response.data);
  }

  async function addEntry(newEntry) {
    let response = await axios.post(
      `http://127.0.0.1:8000/api/capstone/addEntry/`,
      newEntry,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    entry.unshift(newEntry);
    console.log(response.data);
    getEntries();
    setOpen();
  }

  return (
    <>
    <div className="main">
      <div className="container"></div>
        <div>
          <h1>Home Page for {user.username}!</h1>
        </div>
        <div>
          <button onClick={() => setOpen(true)}>Add Entry</button>
          {open && <JournalEntryForm addNewEntryProperty={addEntry} setOpen={setOpen} />}
        </div>
        <div>
        <button onClick={() => setCollapsible(true)}>Check your progress!</button>
          {collapsible && <MoodTracker entries={entry} setCollapsible={setCollapsible}/>}
        </div>
      <div>
        <DisplayEntries entry={entry} />
      </div>
    </div>
    </>
  );
};

export default HomePage;

// {/* <div className="container">
//       <h1>Home Page for {user.username}!</h1>
//       {cars &&
//         cars.map((car) => (
//           <p key={car.id}>
//             {car.year} {car.model} {car.make}
//           </p>
//         ))}
//     </div> */}
