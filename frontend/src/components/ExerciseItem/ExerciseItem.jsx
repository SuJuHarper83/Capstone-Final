import React from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const ExerciseItem = (props) => {
  const [user, token] = useAuth();
  const { exercise } = useParams();

  return (
    <>
      <div className="ex-title">
        <h4>{exercise && props.exercise.ex_title}</h4>
      </div>
      <div className="exercise">
        <p>{exercise && props.exercise.input_d}</p>
        <br />
        <p>{exercise && props.exercise.input_e}</p>
      </div>
    </>
  );
};

export default ExerciseItem;
