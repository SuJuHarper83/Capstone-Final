import React from "react";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const ExerciseResults = (props) => {
    const [user, token] = useAuth();

    return (
       <>
       <div className="exercise-display">
        <table className="exercise-table">
            <tbody>
            <tr className="exercise-td" />
                {props.parentEntries.map((exercise) => {
                    return (
                        <tr key={exercise.id}>
                            <td className="exercise-display"> 
                            <Link to={`/${exercise.id}`}>{exercise.ex_title}</Link>
                            </td>
                        </tr> 
                );
            })}
            </tbody>
        </table>
       </div>
       </>
    );
};

export default ExerciseResults