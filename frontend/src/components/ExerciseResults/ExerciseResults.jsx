import React from "react";
import useAuth from "../../hooks/useAuth";
import styled from "styled-components";
import ExerciseGrid from "../ExerciseList/ExerciseList"

const FlexBox = styled.ul`
display: flex;
flex-wrap: wrap;
`

const ExerciseResults = (props) => {
    const [user, token] = useAuth();

    return (
        // modal
        // <FlexBox>
        //     {props.ExerciseArray.map(el => <ExerciseGrid key={el.id} exercise = {el}/>)}
        // </FlexBox>
        <FlexBox>
            {props.ExerciseArray.map((exercise, index) => (
                <ExerciseGrid key={index} exercise={exercise.id.id} />
            ))}
        </FlexBox>
    );
};

export default ExerciseResults