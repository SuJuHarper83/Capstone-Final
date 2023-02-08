import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const ExerciseItem = (props) => {
  const [user, token] = useAuth();
  const [exercise, viewExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getExercise();
  }, []);
  
  async function getExercise() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/getExercises/${id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    console.log(response.data);
    viewExercise(response.data);
  }
  return (
    <>
      <div className="ex-title">
        <h4>{props.ex_title}</h4>
      </div>
      <div className="exercise">
        <p>{props.input_e}</p>
        <br />
        <p>{props.input_f}</p>
      </div>
    </>
  );
};

export default ExerciseItem;
