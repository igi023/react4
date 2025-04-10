
function Searchbar({ videos, onSearchVideo }) {
    
    const SearchVideobyName = (name) => {
      const filtered = videos.filter((video) =>
        video.title.toLowerCase().includes(name.toLowerCase())
      );
      onSearchVideo(filtered); 
    };
  
    return (
      <form>
        <label>
          Find videos:
          <input
            className="mb-4"
            type="text"
            name="search"
            onInput={(e) => SearchVideobyName(e.currentTarget.value)}
          />
        </label>
      </form>
    );
  }
  
  export default Searchbar;
  