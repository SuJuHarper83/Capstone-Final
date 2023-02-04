import React, { useState } from "react";
import styled from "styled-components";
import useAuth from "../../hooks/useAuth";
import VideoDisplay from "../VideoGrid/VideoGrid";
import VideoGrid from "../VideoGrid/VideoGrid";

const FlexBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const VideoList = (props) => {
  const [user, token] = useAuth();
  const [videoId, setVideoId] = useState();

  return (
    // modal
    <>
      <FlexBox>
        {props.parentEntries.map((video) => (
          <VideoDisplay key={video.id}>
            <img src={video.thumbnail} />
            <br />    
            {video.video_title}
          </VideoDisplay>
        ))}
      </FlexBox>
    </>
  );
};

export default VideoList;
