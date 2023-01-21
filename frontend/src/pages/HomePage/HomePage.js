import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [entries, setEntries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getEntries();
  }, [token]);

    async function getEntries() {
      try {
        let response = await axios.get("http://127.0.0.1:8000/api/capstone/addEntry/", entries, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setEntries(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    
  function handleSubmit(event) {
    event.preventDefault();
    getEntries();
  }

  return (
    <>
      <div className="title-container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="search-bar">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            />
            <button className="button" type="submit">
              Search
            </button>
        </form>
      </div>
    </>
  );
};

export default HomePage;

{/* <div className="container">
      <h1>Home Page for {user.username}!</h1>
      {cars &&
        cars.map((car) => (
          <p key={car.id}>
            {car.year} {car.model} {car.make}
          </p>
        ))}
    </div> */}
