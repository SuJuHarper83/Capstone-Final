import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayEntries from "../../components/DisplayEntries/DisplayEntries";
import axios from "axios";
import SearchBar from "../../components/SearchEntries/SearchEntries";
import JournalEntryForm from "../../components/AddEntry/AddEntry";
import "./HomePage.css";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [entry, setEntries] = useState([]);
  const entryModal = document.querySelector(".entry-modal");
  const entryOverlay = document.querySelector(".entry-overlay");
  const openBtn = document.querySelector(".button-open");
  const closeBtn = document.querySelector(".button-close");

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

  const openModal = function () {
    entryModal.classList.remove("hidden");
    entryOverlay.classList.remove("hidden");
  };

  const closeModal = function () {
    entryModal.classList.add("hidden");
    entryOverlay.classList.add("hidden");
  };

  return (
    <>
      <div className="title-container">
        <h1>Home Page for {user.username}!</h1>
      </div>
        <section className="entry-modal hidden">
          <div className="flex">
            <span className="button-close" onClick={() => closeModal()}>x</span>
            <JournalEntryForm addNewEntryProperty={addEntry} />
          </div>
        </section>
        <div className="entry-overlay hidden"></div>
        <button className="button-open" onClick={() => openModal()}>
          Add Entry
        </button>
      <div>
        <DisplayEntries entry={entry} />
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
