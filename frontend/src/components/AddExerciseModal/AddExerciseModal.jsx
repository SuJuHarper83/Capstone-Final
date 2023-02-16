import React, { useState } from "react";
// import useAuth from "../../hooks/useAuth";

const NewExerciseEntry = (props) => {
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
            props.addNewExerciseProperty(newExercise)
    }

    return (
        <div className="ex-entry-container">
            <form onSubmit={handleSubmit} className="add-exercise-table">
                <p>
                    <label>Title </label>
                    <input
                        type="text"
                        className="ex-form-control"
                        value={ex_title}
                        onChange={(event) => setExTitle(event.target.value)}
                    />
                </p>
                <p>
                    <label>Exercise </label>
                    <input
                        type="text"
                        className="ex-form-control"
                        value={input_d}
                        onChange={(event) => setInputD(event.target.value)}
                    />
                </p>
                <p>
                    <label>Examples </label>
                    <input
                        type="text"
                        className="ex-form-control"
                        value={input_e}
                        onChange={(event) => setInputE(event.target.value)}
                    />
                </p>
                <p>
                <button className="button" type="submit">
                    Submit
                </button>
                </p>
            </form>
        </div>
    );
};

export default NewExerciseEntry