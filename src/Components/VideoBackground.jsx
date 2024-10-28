import {useState, useEffect, useRef} from "react";


export function VideoBackground(props) {
    const [videos, setVideos] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        // Fetch the list of videos from the API
        const fetchVideos = async () => {
            const response = await fetch('/api/videos');
            const videoFiles = await response.json();
            console.log("poo: " + JSON.stringify(videoFiles.files.files));

            setVideos(videoFiles.files.files);
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        setCurrentVideo(getRandomArbitrary(0, videos.length-1))
    }, [videos]);
    const handleVideoEnd = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length); // Loop back to the first video after the last one
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, [currentVideo]);

    return (

    <div className="relative h-screen w-full overflow-hidden">
        {videos.length > 0 && (
            <video
                ref={videoRef}
                key={videos.at(currentVideo)} // Key change triggers reload for each video
                src={videos.at(currentVideo)}
                onEnded={handleVideoEnd}
                autoPlay
                muted
                playsInline

                loop // To switch to the next video on end
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

        )}
        {props.children}
    </div>
    )
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



