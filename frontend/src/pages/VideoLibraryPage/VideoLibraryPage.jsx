import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import VideoList from "../../components/VideoList/VideoList";
import { DATA } from "../../VideoData";
import "./VideoLibraryPage.css";

const VideoLibraryPage = () => {
    const [user, token] = useAuth();
    const [video, setVideos] = useState(DATA);

    return (
        <>
        <body className="exercise-page-body">
            <div className="exercise-page-title">
                <h1>Video Library</h1>
                <h4>...All progress takes place outside your comfort zone...</h4>
            </div>
                <div>
                    <VideoList data={DATA} />
                </div>
        </body> 
        </>
    )
}

export default VideoLibraryPage