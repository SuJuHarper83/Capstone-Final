import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayEntries from "../../components/DisplayEntries/DisplayEntries";
import axios from "axios";
import SearchBar from "../../components/SearchEntries/SearchEntries";
import JournalEntryForm from "../../components/AddEntry/AddEntry";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [entry, setEntries] = useState([]);

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
    console.log(response.data);
    getEntries();
  }

  return (
    <>
      <div className="title-container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div>
        <section className="modal-hidden">
          <div className="flexbox">
            <JournalEntryForm addNewEntryProperty={addEntry} />
          </div>
        </section>
        <div className="add-entry">
          <button className="add-button" onClick={() => addEntry()}>
            Add Entry
          </button>
        </div>
      </div>
      <SearchBar entry={entry} />
      <div>
        <DisplayEntries parentEntries={entry} />
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
