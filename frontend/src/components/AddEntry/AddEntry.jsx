import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";

const AddEntry = (props) => {

    const [user, token] = useAuth();
    const [date, setDate] = useState("");
    const [title, setTitle] = useState("");
    const [input_a, setInputA] = useState("");
    const [input_b, setInputB] = useState("");
    const [input_c, setInputC] = useState("");
    const [mood, setMood] = useState("");
    const [image, setImage] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        let newEntry = {
            date: date,
            input_a: input_a,
            input_b: input_b,
            input_c: input_c,
            mood: mood,
            image: image,
        };
        console.log(newEntry);
        props.addNewEntryProperty(newEntry);
        }

        return (
            <div className="entry-container">
                <form onSubmit={handleSubmit} className="add-entry-table">
                    <p>
                        <label>Date </label>
                        <input
                            type="date"
                            className="form-control"
                            value={date}
                            onChange={(event) => setDate(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Title </label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>How did you move today? </label>
                        <input
                            type="text"
                            className="form-control"
                            value={input_a}
                            onChange={(event) => setInputA(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>How do you feel? </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={input_b}
                            onChange={(event) => setInputB(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Any other thoughts? </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={input_c}
                            onChange={(event) => setInputC(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>What is your mood on a scale of 1-5, 5 being fabulous?
                        </label>
                        <input 
                            type="text"
                            className="form-control"
                            value={mood}
                            onChange={(event) => setMood(event.target.value)}
                        />
                    </p>
                    <p>
                        <label>Add Image</label>
                        <input
                            type="file"
                            className="image"
                            accept="image/png, image/jpeg"
                            onChange={(event) => setImage(event.target.value)}
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

export default AddEntry