import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import { useParams } from "react-router-dom";
import { DATA } from "../../VideoData";
import { ReactPropTypes } from "react";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const colorArray = ["#4f6d7a", "#c0d6df", "#dbe9ee", "#4a6fa5", "#166088"];

const VideoDisplay = styled.li`
  height: 270px;
  width: 350px;
  padding: 1rem;
  display: grid;
  column-gap: 1px;
  content: center;
  box-shadow: 2px 8px 16px -2px rgba(19, 57, 94, 0.486);
  margin: 1rem;
  border-radius: 40px;
`;

const VideoList = ({data}) => {
  const [user, token] = useAuth();
  const [video, setVideo] = useState({DATA});
  const { videoId } = useParams();

//   useEffect(() => {
//     const getVideo = async () => {
//     let response = await axios.get(
//         `http://127.0.0.1:8000/api/capstone/getVideos/${videoId}/`,
//         {
//         headers: {
//             Authorization: "Bearer " + token,
//         },
//         }
//     );
//     console.log(response.data);
//     setVideo();
//   }

//     getVideo();
// }, [videoId]);

  return (
    <>
      <FlexBox>
        {data.map((video) => (
          <VideoDisplay key={video.id}
            style={{
              backgroundColor: `${
                colorArray[Math.floor(Math.random() * colorArray.length)]
              }`,
            }}
          >
            <div className="video-responsive">
              <iframe
                width = "320"
                height = "240"
                src={`https://www.youtube.com/embed/${video.video}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                >
              <br /> 
              {video.title}
              </iframe>
            </div>
          </VideoDisplay>
        ))}
      </FlexBox>
    </>
  );
};

export default VideoList;
