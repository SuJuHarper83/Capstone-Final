import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import NewExerciseEntry from "../../components/AddExerciseModal/AddExerciseModal";
import "./ExerciseLibraryPage.css";

const ExerciseLibraryPage = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);

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

  const addExercise = async (newExercise) => {
    let response = await axios.post(
      `http://127.0.0.1:8000/api/capstone/getExercises/`,
      newExercise,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    console.log(response.data);
    getExercises(response.data);
    setModalOpen();
  };

  return (
    <>
      <ExerciseList exercise={exercise} />
      <div>
        <button onClick={() => setModalOpen(true)}>Add Exercise</button>
        {modalOpen && (
          <NewExerciseEntry
            addNewExerciseProperty={addExercise}
            setModalOpen={setModalOpen}
          />
        )}
      </div>
    </>
  );
};

export default ExerciseLibraryPage;

// modal used without bootstrap
