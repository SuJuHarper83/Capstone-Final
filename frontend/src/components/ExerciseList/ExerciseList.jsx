import React from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import ExerciseDisplay from "../ExerciseGrid/ExerciseGrid";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ExerciseList = (props) => {
  const [user, token] = useAuth();

  return (
    <>
      <FlexBox>
        {props.entries.map((exercise) => (
          <li key={exercise.id}>{exercise.ex_title}</li>
        ))}{" "}
        // replace li w/ ExerciseDisplay
      </FlexBox>
    </>
  );
};

export default ExerciseList;

{
  /* <div className="exercise-display">
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
       </div> */
}
