import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoList from "../../components/VideoList/VideoList";
import { DATA } from "../../VideoData";

const VideoLibraryPage = () => {

    const [user, token] = useAuth();
    const [video, setVideos] = useState(DATA);

    return (
        <>
        <div>
            <VideoList data={DATA} />
        </div>
        </>
    )
}

export default VideoLibraryPage