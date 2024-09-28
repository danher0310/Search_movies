import { Movie } from './components/movie'
import { useMovies } from './hook/useMovies'
import './App.css'
import { useCallback, useEffect, useState, useRef } from 'react'
import debounce from 'just-debounce-it'


function useSearch(){
  const [search, setSearch] = useState('')
  const [error, setError] = useState('')
  const isFirtsInput = useRef(true)

  useEffect( () =>{
    if(isFirtsInput.current){
      isFirtsInput.current = search === ''
      return
    }
    if (search === ''){
      setError('Please introduce a valid search')
      return
    }
    if(search.length < 1){
      setError('Your request shold be at least of more than 1 caracter')
      return
    }
    setError(null)
  }, [search])

  return { search, setSearch, error }


}



function App() {
  const { search, setSearch, error } = useSearch()
  
  const {movies, getMovies } = useMovies({search})

  const debounceGetMovies = useCallback(
    debounce(search =>{
      getMovies({search})

    }, 200)

  )

  const handlerSubmit = (e) =>{
    e.preventDefault()
    const newSearch = search
    setSearch(newSearch)    

    getMovies({search})
    



  }

  const handlerChange = (e) =>{
    const newChange = e.target.value
    setSearch(newChange)
    
    debounceGetMovies(newChange)
    

  }

  
  
    

  return (
    <div className='page'>
      <header className='formSection'>
        
          <h1> Buscador de peliculas</h1>
          <form onSubmit={handlerSubmit}>
            <input onChange={handlerChange} name='search' value={search} placeholder='Superman, Batman...'></input>
            <button>Search</button>
          </form>
          
       
       {error && <p style={{ color: 'red' }}>{error}</p> }
       
      </header>


      <main>
       <Movie movies={movies} />
      </main>
     
    </div>
  )
}

export default App
