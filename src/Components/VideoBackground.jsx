import {useState, useEffect, useRef} from "react";


export function VideoBackground(props) {
    const [videos, setVideos] = useState([]);
    const [mp4Videos, setmp4Videos] = useState([]);

    const [currentVideo, setCurrentVideo] = useState(0);
    const videoRef = useRef(null);

    useEffect(() => {
        // Fetch the list of videos from the API
        const fetchVideos = async () => {
            const response = await fetch('/api/videos');
            const videoFiles = await response.json();

            setVideos(videoFiles.webm.files);
            setmp4Videos(videoFiles.mp4.files);
        };

        fetchVideos();
    }, []);

    useEffect(() => {
        setCurrentVideo(getRandomArbitrary(0, videos.length-1));

        if (videoRef.current) {
            videoRef.current.currentTime = 0;
        }
    }, [videos]);

    const handleVideoEnd = () => {
        setCurrentVideo((prevVideo) => (prevVideo + 1) % videos.length); // Loop back to the first video after the last one
    };

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    }, [currentVideo]);

    return (

    <div className="relative h-screen w-full overflow-hidden">
        {videos.length > 0 && (
            <video
                ref={videoRef}
                src={videos.at(currentVideo)}
                onEnded={handleVideoEnd}
                autoPlay
                muted
                playsInline
                preload="auto"
                poster="/assets/poster.jpg"
                loop={false} // To switch to the next video on end
                className="absolute top-0 left-0 w-full h-full object-cover z-0"
            >
                <source src={mp4Videos.at(currentVideo)} type="video/mp4"/>
                <source src={videos.at(currentVideo)} type="video/webm"/>

            </video>

        )}
        {props.children}
    </div>
    )
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}



