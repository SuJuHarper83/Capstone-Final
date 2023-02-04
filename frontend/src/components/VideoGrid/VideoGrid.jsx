import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoGrid = styled.li`
  width: 200px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 10px;
  font-size: smaller;
`;

const VideoDisplay = (video) => {
  const [user, token] = useAuth();
  const [videoId, setVideoId] = useState();

  return (
    <VideoGrid
      style={{
        backgroundColor: `${
          colorArray[Math.floor(Math.random() * colorArray.length)]
        }`,
      }}
    >
      <div onClick={() => setVideoId(videoId)}>
        <figure className="grid-item">
          <img
            src={video.thumbnail}
            className="vid-image"
            height="141"
            width="256"
            alt=""
          />
        </figure>
      </div>
    </VideoGrid>
  );
};

export default VideoDisplay;
