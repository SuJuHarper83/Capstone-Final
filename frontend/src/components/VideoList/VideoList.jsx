import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import VideoGrid from "../VideoGrid/VideoGrid";

const Flexbox = styled.ul`
    display: flex;
    flex-wrap: wrap;
    `

const VideoList = (props) => {
    const [user, token] = useAuth();
    // const [videoId, setVideoId] = useState();

    return (
        // modal
        <Flexbox>
            {props.VideoArray.map((video, index) => (
                <VideoGrid key={index} video={video.id} />
            ))}
        </Flexbox>
    );
};

export default VideoList