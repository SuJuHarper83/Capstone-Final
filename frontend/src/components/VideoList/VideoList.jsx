import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoDisplay = styled.li`
  height: 70px;
  width: 120px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 40px;
`;

const VideoList = (props) => {
  const [user, token] = useAuth();
  const [video, setVideo] = useState({});
  const { videoId } = useParams();

  useEffect(() => {
    const getVideo = async () => {
    let response = await axios.get(
        `http://127.0.0.1:8000/api/capstone/getVideos/${videoId}/`,
        {
        headers: {
            Authorization: "Bearer " + token,
        },
        }
    );
    console.log(response.data);
    setVideo();
    }

    getVideo();
}, [videoId]);

  return (
    <>
      <FlexBox>
        {props.video.map((video) => (
          <VideoDisplay key={video.id}
            style={{
              backgroundColor: `${
                colorArray[Math.floor(Math.random() * colorArray.length)]
              }`,
            }}
          >
            <br />    
            {video.title}
          </VideoDisplay> //data disappears afte VideoDisplay replaces <li>
        ))}
      </FlexBox>
    </>
  );
};

export default VideoList;
