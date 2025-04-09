import { useParams } from "react-router-dom";
import VIDEOS from "./../Videos.json";

const Video = () => {
    const { id } = useParams();
    let videoFound = null;

    VIDEOS.forEach(video =>{

        if(video.id === id){

            videoFound = video;

        }

        if(videoFound === null)
            return <h1>Video does not exist</h1>



    });

    return (
        <>
            <h2>{videoFound.title}</h2>
            <p>{videoFound.url}</p>
            <iframe 
                src={videoFound.url}
                title={videoFound.title}
                width="560"
                height="315"
               
            />
        </>
    );
};

export default Video;
