
import React from "react";
import './../styles/App.css';

const App = () => {

  const [search,setSearch]=useState("");
  const [movieDetails,setMovieDetails]=useState([]);

  async function getMovie(){
    try{
      let res=await fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=91e8ca0b`)
      let data=await res.json()
      setMovieDetails(data.Search)
      setSearch("");
    }
    catch(error){
      console.log(error);
    }
  }
  console.log(movieDetails);






  return (
    <div>
        {/* Do not remove the main div */}
        <div>Search Movie</div>
        <form>
          <input type="text" value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search Movie"/>
        </form>
        <button onClick={getMovie}>Search</button>
        <ul>
          {movieDetails? movieDetails.map((movie,index)=>
            <li key={index}>
              <h2>{movie.Title} {`(${movie.Year})`}</h2>
              <img src={movie.Poster}/>
            </li>
          ):<p className="error">Invalid movie name. Please try again.</p>}
        </ul>
    </div>
  )
}

export default App
