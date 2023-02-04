import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ExerciseItem = (props) => {
  const [user, token] = useAuth();
  const [exercise, setExercise] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getExerciseById();
  }, []);

  async function getExerciseById() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/getExercises/${id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    console.log(response.data);
    setExercise(props.exercise);
  }

  return (
    <>
      <div className="ex-title">
        <h4>{exercise.ex_title}</h4>
      </div>
      <div className="exercise">
        <p>{exercise.input_e}</p>
        <br />
        <p>{exercise.input_f}</p>
      </div>
    </>
  );
};

export default ExerciseItem;
