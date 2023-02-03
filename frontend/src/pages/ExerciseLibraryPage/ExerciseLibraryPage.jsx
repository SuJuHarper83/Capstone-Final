import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ExerciseResults from "../../components/ExerciseResults/ExerciseResults";
import NewExerciseEntry from "../../components/AddExercise/AddExercise";
import Modal from "react-modal";


const ExerciseLibraryPage = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);
  const modal = document.querySelector(".exercise-modal");
  const btn = document.querySelector(".btn-open");
  const span = document.querySelector(".btn-close");

  useEffect(() => {
    getExercises();
  }, []);

  async function getExercises() {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getExercises/`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data)
      setExercises(response.data)
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
      console.log(response.data)
      getExercises()
  }

  const openModal = function () {
    modal.style.display = "block";
  }

  return (
    <>
      <div>
        <ExerciseResults parentEntries={exercise} />
      </div>
      <div id="exercise-modal">
        <div className="modal-content">
            <span className="btn-close">x</span>
            <NewExerciseEntry addNewExerciseProperty={addExercise} />
        </div>
      </div>
        <button id="btn-open" onClick={() => openModal()}>
          Add Exercise
        </button>
    </>
  );
};

export default ExerciseLibraryPage;
