import React from "react";
import "./ExerciseModal.css";

const ExerciseModal = ({exercise, setExModalOpen}) => {

    return (
        <>
        <div className="ex-modal-background">
            <div className="ex-modal-container">
                <div className="ex-modal-body">
                    <div className="ex-title">
                        <h2>{exercise.ex_title}</h2>
                    </div>
                    <div className="exercise">
                        <p>{exercise.input_d}</p>
                        <br />
                        <h4>Variations</h4>
                        <p>{exercise.input_e}</p>
                    </div>
                    <div className="ex-modal-footer">
                    <button className="btn-close" onClick={() => setExModalOpen(false)}>Close</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
    };

export default ExerciseModal;
