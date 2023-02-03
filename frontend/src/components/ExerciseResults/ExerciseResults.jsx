import React from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import ExerciseGrid from "../ExerciseList/ExerciseList"

// const FlexBox = styled.ul`
// display: flex;
// flex-wrap: wrap;
// `

const ExerciseResults = (props) => {
    const [user, token] = useAuth();

    return (
       <>
       <div className="exercise-display">
        <table className="exercise-table">
            <tr className="exercise-td" />
                {props.parentEntries.map((exercise, index) => {
                    return (
                        <tr key={index}>
                          <td className="ex-td">{exercise.ex_title}</td>
                        </tr> 
                );
            })}
        </table>
       </div>
       </>
        // <FlexBox>
        //     {props.ExerciseArray.map((exercise, index) => (
        //         <ExerciseGrid key={index} exercise={exercise.id.id} />
        //     ))}
        // </FlexBox>
    );
};

export default ExerciseResults