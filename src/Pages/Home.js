// Importujemo React hookove i komponente
import { useState } from "react";
import GetAllVideos from "../Components/AllVideos";
import Searchbar from "../Components/Search";
import VIDEOS from "../Videos.json"; // Fajl sa podacima o videima

const Home = () => {

  const [videos,SetVideos] = useState(VIDEOS);

 
  const [filteredVideos, setFilteredVideos] = useState(VIDEOS);


  const handleSearchVideo = (results) => {
    setFilteredVideos(results);
  };

  return (
    <>
      
      <Searchbar videos={videos} onSearchVideo={handleSearchVideo} />
      <GetAllVideos videos={filteredVideos} />
    </>
  );
};

export default Home;
