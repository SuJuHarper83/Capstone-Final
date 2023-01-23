import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import ExerciseResults from "../../components/ExerciseResults/ExerciseResults"


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
        }   catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <>
        <div>
            <ExerciseResults ExerciseArray={exercise} />
        </div>
        </>
    )
}

export default ExerciseLibraryPage