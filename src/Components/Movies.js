import React, { useState,useEffect } from 'react'
import axios from 'axios';
import { Audio } from 'react-loader-spinner';
import Pagination from './Pagination';


function Movies() {

  const [movies, setMovies] = useState([])
  const [page,setPage] = useState(1)
  const[hover,setHover] = useState('')
  const[favourites,setFavourites] = useState([])

  function goAhead() {
    setPage(page + 1)
  }

  function goBack(){
    if(page > 1){
    setPage(page - 1)
    }
  }

  useEffect(function(){
    axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=7b5110ec7960d33ad517a200ae2abe4b&page=${page}`)
  .then((res)=>
          {
            console.table(res.data.results)
            setMovies(res.data.results);
          }
          )
  },[page])

  let add = (movie) =>{
    let newArray = [...favourites,movie]
    setFavourites([...newArray])

  }
  
  return (
    <>
        <div className='mb-8' >
            <div className='mt-8 mb-8 font-bold text-2xl text-center'>Trending Movies</div>
            {
              movies.length == 0 ?
              <div className='flex justify-center'>
              <Audio
                  height="80"
                  width="80"
                  radius="9"
                  color="gray"
                  ariaLabel="loading"
                  wrapperStyle
                  wrapperClass
              />
              </div>:
  
            <div className='flex flex-wrap justify-center '>
                {
                  movies.map((movie)=>(
                    <div className="bg-cover bg-center h-[30vh] w-[250px] flex items-end rounded-xl m-4 hover:scale-110 ease-out duration-300 relative"
                        style={{
                          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.backdrop_path}')`
                        }}
                        onMouseEnter={()=>setHover(movie.id)}
                        onMouseLeave={()=>setHover("")}
                        >
                        
                        {
                          hover == movie.id && 
                          <>
                          {
                            !favourites.find((m)=>m.id==movie.id) ?
                            <div className='absolute
                        top-2 right-3
                        p-2 bg-gray-800
                        rounded-xl
                        text-xl cursor-pointer'
                        onClick={()=>add(movie)}>😍
                        </div>:
                        <div className='absolute
                        top-2 right-2
                        p-2 bg-gray-800
                        rounded-xl
                        text-xl cursor-pointer'
                        onClick={()=>add(movie)}>❌</div>
                          }
                         
                        </>
                        }                        
                        <div className='w-full bg-gray-900 text-white py-2 text-center rounded-b-xl'>{movie.title}</div>
                    </div> 
                  ))
                }
            </div>
            }
        </div>
        <Pagination pageProp={page} goBack={goBack} goAhead={goAhead}/>
    </>
  )
}

export default Movies
