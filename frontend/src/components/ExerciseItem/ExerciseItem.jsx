import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const DisplayItem = (props) => {
    const [user, token] = useAuth();
    const [item, viewItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        getItem();
    }, []);

    async function getItem(item) {
        let response = await axios.get(`http://127.0.0.1:8000/api/capstone/getExercises/${id}/`,
        item,
        { headers: { Authorization: "Bearer " + token, },}
        );
        console.log(response.data);
        viewItem(response.data);
    }

    return (
        <>
            <div className="ex-title">
                <h4>{exercise.ex_title}</h4>
            </div>
            <div className="exercise">
                <p>{exercise.input_e}</p>
                <br />
                <p>{exercise.input_f}</p>
            </div>
        </>
    )
}


export default DisplayItem