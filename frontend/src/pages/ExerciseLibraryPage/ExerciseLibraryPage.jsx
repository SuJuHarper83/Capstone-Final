import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ExerciseList from "../../components/ExerciseList/ExerciseList";
import NewExerciseEntry from "../../components/AddExerciseModal/AddExerciseModal";
import "./ExerciseLibraryPage.css";

const ExerciseLibraryPage = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

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
      <body className="exercise-body">
        <div className="exercise-page-title">
          <h1>Exercise Library</h1>
          <h4>
            ...True enjoyment comes from activity of the mind and exercise of
            the body; the two are ever united...
          </h4>
        </div>
        <div className="exercise-box">
          <div className="exercise-button">
            <button onClick={() => setModalOpen(true)}>Add Exercise</button>
            {modalOpen && (
              <NewExerciseEntry
                addNewExerciseProperty={addExercise}
                setModalOpen={setModalOpen}
              />
            )}
          </div>
          <ExerciseList exercise={exercise} />
        </div>
        <button className="ex-home" onClick={() => navigate("/")}>Home</button>
      </body>
    </>
  );
};

export default ExerciseLibraryPage;

// modal used without bootstrap
