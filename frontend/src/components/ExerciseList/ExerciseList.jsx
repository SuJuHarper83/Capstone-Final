import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const ExerciseGrid = styled.li`
  width: 200px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 10px;
  font-size: smaller;
`;

const ExerciseList = (exercise) => {
  const [user, token] = useAuth();
  const [exerciseId, setExerciseId] = useState();
  const { ex_title } = useParams();

  return (
    <ExerciseGrid
      style={{
        backgroundColor: `${
          colorArray[Math.floor(Math.random() * colorArray.length)]
        }`,
      }}
    >
      <div onClick={() =>setExerciseId(exerciseId)}>
        <p>{exercise.ex_title}</p>
      </div>
    </ExerciseGrid>
  );
};

export default ExerciseList;
