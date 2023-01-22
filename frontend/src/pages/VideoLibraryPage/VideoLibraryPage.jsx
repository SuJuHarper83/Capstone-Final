import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import VideoList from "../../components/VideoList/VideoList";

const VideoLibraryPage = () => {

    const [user, token] = useAuth();
    const [video, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    async function getVideos() {
        try {
            let response = await axios.get(
                `http://127.0.0.1:8000/api/capstone/getVideos/`,
                { headers: { Authorization: "Bearer " + token } }
            );
            console.log(response.data);
            setVideos(response.data);
        }   catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <>
        <div>
            <VideoList VideoArray={video} />
        </div>
        <li>
            {/* <button onClick={() => navigate("/")}>Home</button> */}
        </li>
        </>
    )
}

export default VideoLibraryPage