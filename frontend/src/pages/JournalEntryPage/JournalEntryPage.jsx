import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./JournalEntryPage.css";


const JournalEntryPage = () => {
  const [user, token] = useAuth();
  const [entry, viewEntry] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getEntry();
  }, []);

  async function getEntry() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/addEntry/${id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    console.log(response.data);
    viewEntry(response.data);
  }

  return (
    <>
    <body className="entry-body">
      <div className="entry-page-title">
        <h1>Fill your paper with the breathings of your heart...</h1>
      </div>
        <div className="entry-box">
          <h1>{entry.entry_title}</h1>
          <h2>How did you move today?</h2>
          <p>{entry.input_a}</p>
          <br />
          <h2>How do you feel?</h2>
          <p>{entry.input_b}</p>
          <br />
          <h2>Any other thoughts?</h2>
          <p>{entry.input_c}</p>
          <br />
          <h2>What is your mood on a scale of 1-5, 5 being fabulous?</h2>
          <p>{entry.mood}</p>
          <br />
          <img src={`http://127.0.0.1:8000${entry.image}`} alt=""/>
        </div>
      <button className="btn1" onClick={() => navigate(-1)}>Go back</button>  
      <button className="btn2" onClick={() => navigate("/")}>Home</button>
      <br />
      <br />
      <br />
      <br />
      <br />
    </body>
    </>
  );
};

export default JournalEntryPage;
