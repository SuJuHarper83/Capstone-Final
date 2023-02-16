import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import ExerciseModal from "../ExerciseModal/ExerciseModal";
import "./ExerciseList.css";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const ExerciseGrid = styled.li`
  height: 70px;
  width: 120px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 40px;
`;

const ExerciseList = (props) => {
  const [user, token] = useAuth();
  const [exercise, setExercise] = useState({});
  const { exerciseId } = useParams();
  const itemModal = document.querySelector(".item-modal");
  const itemOverlay = document.querySelector(".item-overlay");

  useEffect(() => {
    const getExercise = async () => {
    let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getExercises/${exerciseId}/`,
        {
        headers: {
            Authorization: "Bearer " + token,
        },
        }
    );
    console.log(response.data);
    setExercise();
    }

    getExercise();
}, [exerciseId]);

  const openModal = function() {
    itemModal.classList.remove("hidden");
    itemOverlay.classList.remove("hidden");
  };

  const closeModal = function() {
    itemModal.classList.add("hidden");
    itemOverlay.classList.add("hidden");
  };

  return (
    <>
      <FlexBox>
        {props.exercise.map((exercise) => (
          <ExerciseGrid
            key={exercise.id}
            style={{
              backgroundColor: `${
                colorArray[Math.floor(Math.random() * colorArray.length)]
              }`,
            }}
          >
          <section className="item-modal hidden">
            <div className="flex">
              <span className="modclose" onClick={() => closeModal()}>x</span>
              <ExerciseModal exercise={exercise} />
              {console.log(exerciseId)}
            </div>
          </section>
            <div className="item-overlay hidden"></div>
            <Link to={`/exercise_library/${exercise.id}`} onClick={() => openModal()}>
              {exercise.ex_title}
            </Link>
          </ExerciseGrid>
        ))}
      </FlexBox>
    </>
  );
};

export default ExerciseList;
