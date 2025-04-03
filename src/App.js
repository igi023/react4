import 'bootstrap/dist/css/bootstrap.min.css';

const VIDEOS = [
  {
    id:'1',
    title:'How to learn js',
    url:'https://www.youtube.com/watch?v=PkZNo7MFNFg&ab_channel=freeCodeCamp.org',
    cover:'https://i.ytimg.com/vi/PkZNo7MFNFg/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAguxhrjNZKsuDntmFfRCV9gZbtEQ',
  },

  {
    id:'2',
    title:'How to learn php',
    url:'https://m.youtube.com/watch?v=ZdP0KM49IVk&pp=ygUQaG93IHRvIGxlYXJuIHBocNIHCQliAAYKOfT1XA%3D%3D',
    cover:'https://i.ytimg.com/vi_webp/ZdP0KM49IVk/hqdefault.webp',

  }


];




function App() {
  return (

    <>
   
      {VIDEOS.map(video =>

       <div className='container d-flex m-5'>
        <a key={video.id} href={video.url} target='blank'>
        <img src={video.cover}/>
        <p>{video.title}</p>
        </a>
      </div>  

      )}
       
         


    </>
 


  );
}

export default App;
