import React,{useEffect,useState} from 'react';
import axios from 'axios';



function Banner() {
  const [movie, setMovie] = useState({})
  useEffect(function(){
    axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=7b5110ec7960d33ad517a200ae2abe4b")
  .then((res)=>
          {
            console.table(res.data.results)
            setMovie(res.data.results[0]);
          }
          )
  },[])
  return (
    <>
        <div
        className="bg-cover bg-center h-[40vh] md:h-[60vh] flex items-end justify-center"
          style={{
            backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`
          }}
        >
            <div className='text-xl md:text-3xl text-white p-6 bg-gray-900 bg-opacity-50 w-full flex justify-center '>{movie.title}</div>
        </div>
    </>
  )
}

export default Banner
