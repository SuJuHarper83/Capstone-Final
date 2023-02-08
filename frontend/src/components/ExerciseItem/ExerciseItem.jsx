import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const ExerciseItem = (props) => {
  const [user, token] = useAuth();
  
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
