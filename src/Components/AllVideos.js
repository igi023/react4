
import VIDEOS from '../Videos.json';

const GetAllVideos = () => {
  



  return (
    <>
      {VIDEOS.map((video) => (
        <div className='container d-flex m-5' key={video.id}>
          <a href={video.url} target="_blank" rel="noopener noreferrer">
            <img src={video.cover} alt={video.title} />
            <p>{video.title}</p>
          </a>
        </div>
      ))}
    </>
  );
};

export default GetAllVideos;
