
import { useState, useRef } from 'react'
import { SearchMovies } from '../services/SearchMovies'


export const useMovies = ( {search} ) =>{
  const [responseMovies, setResponseMovies ]= useState([])
  const prevSearch = useRef()


 
  
  const getMovies = async ({search}) =>{
    if(prevSearch.current === search) return

    const newMovies = await SearchMovies({search})
    prevSearch.current = search    
    
    
    setResponseMovies(newMovies)

    
   

    
    //testing    
    // if(search){      
    //   fetch(`https://omdbapi.com/?apikey=efc2f914&s=${search}`)
    //   .then(res => res.json())
    //   .then(json => {
    //     setResponseMovies(json)
    //   })

    // }else{
    //   setResponseMovies([])
    // }



  }
  

  return { movies: responseMovies, getMovies }


}