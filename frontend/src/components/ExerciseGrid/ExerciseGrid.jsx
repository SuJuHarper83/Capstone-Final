import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const ExerciseGrid = styled.li`
  width: 100px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 30px;
  font-size: smaller;
`;

const ExerciseDisplay = ({ exercise }) => {
  const [user, token] = useAuth();
  const [exerciseId, setExerciseId] = useState();

  return (
    <>
      <ExerciseGrid
        style={{
          backgroundColor: `${
            colorArray[Math.floor(Math.random() * colorArray.length)]
          }`,
        }}
      >
        <Link to={`/${exercise.id}`}> //error: id not defined
          {exercise.ex_title} //error: ex_title not defined
        </Link>
      </ExerciseGrid>
    </>
  );
};

export default ExerciseDisplay;
