





  // eslint-disable-next-line react/prop-types
  const ListMovies = ({ movies }) => {
    
    
    
    return(
      <ul className="movies">
        {
          // eslint-disable-next-line react/prop-types
          movies.map(movie => (
            <li className="movie" key={ movie.id }>
              <h2>{movie.title}</h2>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title}/>
            </li>
          ))
        }

      </ul>
    )
  }

  const ListNoMovies = () =>{
    return(
      <p>We don&apos;t fiend movie</p>
    )
  }

// eslint-disable-next-line react/prop-types
export function Movie ({ movies }) {
  // eslint-disable-next-line react/prop-types
  const hadMovies = movies?.length > 0  
  
  

  return (
    
      hadMovies ? <ListMovies movies={ movies } /> : <ListNoMovies />
    
  )
}