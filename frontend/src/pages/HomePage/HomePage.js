import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import DisplayEntries from "../../components/DisplayEntries/DisplayEntries";
import axios from "axios";
import SearchBar from "../../components/SearchEntries/SearchEntries";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  const [user, token] = useAuth();
  const [entry, setEntry] = useState([]);

  useEffect(() => {
    getEntry();
  }, []);

    async function getEntry() {
      try {
        let response = await axios.get(`http://127.0.0.1:8000/api/capstone/addEntry/`, {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        console.log(response.data);
        setEntry(response.data);
      } catch (error) {
        console.log(error.response.data);
      }
    }
    
  return (
    <>
      <div className="title-container">
        <h1>Home Page for {user.username}!</h1>
      </div>
      <div className="search-bar">
      <SearchBar entry={entry} />
      </div>
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
