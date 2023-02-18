import React from "react";
import "./ExerciseModal.css";

const ExerciseModal = ({exercise, setExModalOpen}) => {

    return (
        <>
        <div className="ex-modal-background">
            <div className="ex-modal-container">
                <div className="ex-modal-body">
                    <div className="exercise">
                        <h2>{exercise.ex_title}</h2>
                        <br />
                        <p>{exercise.input_d}</p>
                        <br />
                        <h3>Variations</h3>
                        <p>{exercise.input_e}</p>
                    </div>
                    <button className="btn-close" onClick={() => setExModalOpen(false)}>Close</button>
                </div>
            </div>
        </div>
        </>
    );
    };

export default ExerciseModal;
