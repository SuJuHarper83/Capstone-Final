import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const Grid = styled.li`
    width: 200px;
    padding: 1rem;
    display: grid;
    column-gap: 1px;
    content: center;
    box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
    margin: 1rem;
    border-radius: 10px;
    font-size: smaller;
    `

const VideoGrid = (video) => {
    const [user, token] = useAuth();
    const [videoId, setVideoId] = useState();

    return (
        <Grid
            style={{
                backgroundColor: `${
                    colorArray[Math.floor(Math.random() * colorArray.length)]
                }`,
            }}
        >
            <div onClick={() => setVideoId(videoId)}>
                <img src={video.thumbnail} height="141" widght="256" alt="" />
            </div>
        </Grid>
    );
};

export default VideoGrid