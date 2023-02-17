import React, { useState } from "react";
import "./AddExerciseModal.css"
// import useAuth from "../../hooks/useAuth";

const NewExerciseEntry = ({addNewExerciseProperty, setModalOpen}) => {
    // const [user, token] = useAuth();
    const [ex_title, setExTitle] = useState("");
    const [input_d, setInputD] = useState("");
    const [input_e, setInputE] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
            let newExercise = {
                ex_title: ex_title,
                input_d: input_d,
                input_e: input_e,
            };
            console.log(newExercise);
            addNewExerciseProperty(newExercise)
    }

    return (
        <div className="addex-modal-background">
        <div className="addex-modal-container">
            <div className="addex-modal-form">
            <form onSubmit={handleSubmit}>
                <p>
                    <label>Title </label>
                    <input
                        type="text"
                        className="addex-form-control"
                        value={ex_title}
                        onChange={(event) => setExTitle(event.target.value)}
                    />
                </p>
                <p>
                    <label>Exercise </label>
                    <input
                        type="text"
                        className="addex-form-control"
                        value={input_d}
                        onChange={(event) => setInputD(event.target.value)}
                    />
                </p>
                <p>
                    <label>Examples </label>
                    <input
                        type="text"
                        className="addex-form-control"
                        value={input_e}
                        onChange={(event) => setInputE(event.target.value)}
                    />
                </p>
                <div className="addex-modal-footer">
                <button className="button" type="submit">
                    Submit
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>
    );
};

export default NewExerciseEntry