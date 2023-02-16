import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import VideoList from "../../components/VideoList/VideoList";

const VideoLibraryPage = () => {

    const [user, token] = useAuth();
    const [video, setVideos] = useState({});

    return (
        <>
        <div>
            <VideoList parentEntries={video} />
        </div>
        </>
    )
}

export default VideoLibraryPage