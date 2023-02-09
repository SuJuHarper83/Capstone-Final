import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useParams } from "react-router-dom";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import NewExerciseEntry from "../../components/AddExercise/AddExercise";
import ExerciseItem from "../../components/ExerciseItem/ExerciseItem";
import "./ExerciseLibraryPage.css";


const ExerciseLibraryPage = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);
  const { id } = useParams();
  const modal = document.querySelector(".modal");
  const modal_two = document.querySelector(".modal_two");
  const overlay = document.querySelector(".overlay");
  const overlay_two = document.querySelector(".overlay_two");
  const openModalBtn = document.querySelector(".btn-open");
  const closeModalBtn = document.querySelector(".btn-close");

  useEffect(() => {
    getExercises();
  }, []);

  async function getExercises() {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getExercises/`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      setExercises(response.data);
  }

  async function addExercise(newExercise) {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/capstone/getExercises/`, newExercise,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      getExercises();
  }

  async function getExercise() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/capstone/getExercises/${id}/`,
      { headers: { Authorization: "Bearer " + token } }
    );
    console.log(response.data);
    getExercises();
  }

  const openModal = function () {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  };

  const closeModal = function () {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  };

  const openModalTwo = function () {
    modal_two.classList.remove("hidden");
    overlay_two.classList.remove("hidden");
  };

  const closeModalTwo = function () {
    modal_two.classList.add("hidden");
    overlay_two.classList.add("hidden");
  };

  return (
    <>
      <div>
        <ExerciseList entries={exercise} />
      </div>
      <section className="modal_two hidden">
        <div>
            <span className="btn-close" onClick={() => closeModalTwo()}>x</span>
            <ExerciseItem props={getExercise} />
        </div>
      </section>
      <div className="overlay_two hidden"></div>
      <button className="btn-open" onClick={() => openModalTwo()}>
      </button>
      <section className="modal hidden">
        <div className="flex">
            <span className="btn-close" onClick={() => closeModal()}>x</span>
            <NewExerciseEntry addNewExerciseProperty={addExercise} />
        </div>
      </section>
      <div className="overlay hidden"></div>
      <button className="btn-open" onClick={() => openModal()}>
        Add Exercise
      </button>
    </>
  );
};

export default ExerciseLibraryPage;