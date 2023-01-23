import React, { useEffect, useState, Component } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ExerciseResults from "../../components/ExerciseResults/ExerciseResults";
import NewExerciseEntry from "../../components/AddExercise/AddExercise";


const ExerciseLibraryPage = () => {
  const [user, token] = useAuth();
  const [exercise, setExercises] = useState([]);

  useEffect(() => {
    getExercises();
  }, []);

  async function getExercises() {
    try {
      let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getExercises/`,
        { headers: { Authorization: "Bearer " + token } }
      );
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  async function addExercise(newExercise) {
    try {
      let response = await axios.post(
        `http://127.0.0.1:8000/api/capstone/getExercises/`, newExercise,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      console.log(response.data);
      setExercises(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  }

  return (
    <>
      <div>
        <ExerciseResults ExerciseArray={exercise} />
      </div>
      <div>
        <NewExerciseEntry addNewExerciseProperty={addExercise} />
      </div>
      {/* <div className="add-entry">
        <button className="add-button" onClick={() => addNewExercise()}>
          Add Exercise
        </button>
      </div> */}
    </>
  );
};

export default ExerciseLibraryPage;
