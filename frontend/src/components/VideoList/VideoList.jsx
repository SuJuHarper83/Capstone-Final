import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { DATA } from "../../VideoData";
import { ReactPropTypes } from "react";
import "./VideoList.css"

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoDisplay = styled.li`
  height: 570px;
  width: 1000px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 40px;
  @media (max-width: 600px) {
    height: 300px;
    width: 510px;
  }
`;

const VideoList = ({data}) => {
  const [user, token] = useAuth();
  const [video, setVideo] = useState({DATA});

  return (
    <>
      <FlexBox>
        {data.map((video) => (
          <VideoDisplay key={data.id}
            style={{
              backgroundColor: `${
                colorArray[Math.floor(Math.random() * colorArray.length)]
              }`,
            }}
          >
            {console.log(video.id)}
            <div className="video-responsive">
              <iframe className="video-player"
                width = "960"
                height = "540"
                src={`https://www.youtube.com/embed/${video.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              >
              </iframe>
            </div>
          </VideoDisplay>
        ))}
      </FlexBox>
    </>
  );
};

export default VideoList;
