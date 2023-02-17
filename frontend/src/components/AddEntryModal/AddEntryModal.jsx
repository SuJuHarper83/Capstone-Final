import React, { useState } from "react";
import "./AddEntryModal.css"
// import useAuth from "../../hooks/useAuth";

const JournalEntryForm = ({addNewEntryProperty, setOpen}) => {
    // const [user, token] = useAuth();
    const [date, setDate] = useState("");
    const [entry_title, setEntryTitle] = useState("");
    const [input_a, setInputA] = useState("");
    const [input_b, setInputB] = useState("");
    const [input_c, setInputC] = useState("");
    const [mood, setMood] = useState("");
    const [file, setFile] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
            let form_data = new FormData ()
            form_data.append('date', date);
            form_data.append('entry_title', entry_title);
            form_data.append('input_a', input_a);
            form_data.append('input_b', input_b);
            form_data.append('input_c', input_c);
            form_data.append('mood', Number(mood));
            form_data.append('image', file)

        console.log(form_data);
        addNewEntryProperty(form_data);
    }

            return (
                <div className="entry-modal-background">
                    <div className="entry-modal-container">
                        <div className="entry-modal-form">
                        <form onSubmit={handleSubmit}>
                            <p>
                                <label>Date </label>
                                <input
                                    type="date"
                                    className="entry-form-control"
                                    value={date}
                                    onChange={(event) => setDate(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>Title </label>
                                <input
                                    type="text"
                                    className="entry-form-control"
                                    value={entry_title}
                                    onChange={(event) => setEntryTitle(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>How did you move today? </label>
                                <input
                                    type="text"
                                    className="entry-form-control"
                                    value={input_a}
                                    onChange={(event) => setInputA(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>How do you feel? </label>
                                <input 
                                    type="text"
                                    className="entry-form-control"
                                    value={input_b}
                                    onChange={(event) => setInputB(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>Any other thoughts? </label>
                                <input 
                                    type="text"
                                    className="entry-form-control"
                                    value={input_c}
                                    onChange={(event) => setInputC(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>What is your mood on a scale of 1-5, 5 being fabulous?
                                </label>
                                <input 
                                    type="text"
                                    className="entry-form-control"
                                    value={mood}
                                    onChange={(event) => setMood(event.target.value)}
                                />
                            </p>
                            <p>
                                <label>Add Image</label>
                                <input
                                    type="file"
                                    id="img"
                                    name="image"
                                    accept="image/*"
                                    onChange={(event) => setFile(event.target.files[0])}
                                />
                            </p>
                            <div className="entry-modal-footer">
                            <button className="button" type="submit">
                                Submit
                            </ button>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
        );
};

export default JournalEntryForm