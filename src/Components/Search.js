import VIDEOS from "./../Videos.json";
import Video from "./videos";



function Searchbar(){
    return(
        <form>
            <label>Find videos: 
                <input className="mb-4" type="text" name="search" onInput={e => SearchVideobyName(e.currentTarget.value)} />

            </label>


        </form>

    )

}


function SearchVideobyName(name){

  

        VIDEOS.forEach(video => {
        
            if(name === video.title){
                console.log('finded')

            }

        })




};



export default Searchbar;