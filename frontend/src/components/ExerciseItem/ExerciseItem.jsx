import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const ExerciseItem = (props) => {
  const [user, token] = useAuth();
  const { exerciseId } = useParams();
  const [exercise, setExercise] = useState({});

  useEffect(() => {
    getExercise();
  }, [props.exercise]);

  async function getExercise() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/getExercises/${exerciseId}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
      console.log(response.data);
      setExercise(response.data);
  }

  return (
    <>
      <div className="ex-title">
        <h2>{exercise.ex_title}</h2>
      </div>
      <div className="exercise">
        <p>{exercise.input_d}</p>
        <br />
        <h4>Variations</h4>
        <p>{exercise.input_e}</p>
      </div>
    </>
  );
};

export default ExerciseItem;
