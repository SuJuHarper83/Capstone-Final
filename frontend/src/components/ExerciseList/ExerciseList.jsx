import React from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const ExerciseGrid = styled.li`
  height: 70px;
  width: 150px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 40px;
  font-size: xx-small;
`;

const ExerciseList = (props) => {
  const [user, token] = useAuth();
  const { exercise, id } = useParams();

  return (
    <>
      <FlexBox>
        {props.entries.map((exercise) => (
          <Link to={`/${exercise.id}`}>
          <ExerciseGrid 
          style={{
            backgroundColor: `${
              colorArray[Math.floor(Math.random() * colorArray.length)]
            }`,
          }}
        >
          <li key={exercise.id}>{exercise.ex_title}</li></ExerciseGrid>
          </Link>
        ))}
      </FlexBox>
    </>
  );
};

export default ExerciseList;