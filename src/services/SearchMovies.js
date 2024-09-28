const API_KEY = 'api_key'


export const SearchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch((`https://omdbapi.com/?apikey=${API_KEY}=${search}`))
    const json =  await response.json()
    const moviesLists = json.Search

    return moviesLists?.map(movie =>({
      id: movie.imdbID,
      title: movie.Title,
      year : movie.Year,
      poster: movie.Poster,
    }))
    
    
    
  // eslint-disable-next-line no-unused-vars
  } catch (error) {
    throw new Error('Error searching movies')
    
  }
  



}
  