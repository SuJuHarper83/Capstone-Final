import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import useAuth from "../../hooks/useAuth";

const JournalEntryPage = () => {
  const [user, token] = useAuth();
  const [entry, viewEntry] = useState([]);
  const { id } = useParams();

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
      <div className="entry-title">
        <h4>{entry.entry_title}</h4>
      </div>
      <div className="entry">
        <h2>How did you move today?</h2>
        <p>{entry.input_a}</p>
        <h2>How do you feel?</h2>
        <p>{entry.input_b}</p>
        <h2>Any other thoughts?</h2>
        <p>{entry.input_c}</p>
        <h2>What is your mood on a scale of 1-5, 5 being fabulous?</h2>
        <p>{entry.mood}</p>
        <br />
        <br />
        {entry.image}
      </div>
    </>
  );
};

export default JournalEntryPage;
