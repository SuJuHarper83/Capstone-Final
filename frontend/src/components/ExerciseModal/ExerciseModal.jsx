import React from "react";
import useAuth from "../../hooks/useAuth";

const ExerciseModal = ({exercise}) => {
    const [user, token] = useAuth();

    return (
        <>
        <div className="ex-title">
            <h2>{exercise.ex_title}</h2>
        </div>
        <div className="exercise">
            <p>{exercise.input_d}</p>
            <br />
            <h4>Variations</h4>
            <p>{exercise.input_e}</p>
        </div>
        </>
    );
    };

export default ExerciseModal;
