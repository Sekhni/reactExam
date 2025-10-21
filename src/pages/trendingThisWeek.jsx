import React from "react";
import { getMovies } from "../api/tmdb-api";
import PageTemplate from '../components/templateMovieListPage';
import Spinner from '../components/spinner'; 



const trendingThisWeek = () => {
  const {trending: movieIds } = useContext(MoviesContext);

   const { data, error, isPending, isError } = useQuery({
    queryKey: ['discover'],
    queryFn: getMovies,
  })

  if (isPending) {
    return <Spinner />
  }

  if (isError) {
    return <h1>{error.message}</h1>
  }

  const movies = data.results;

  'https://api.themoviedb.org/3/movie/trending api_key=a765924343a502b7090d2aaa9ef43af7&language=en-Us&page=1'


  const toDo = () => true;

  return (
    <PageTemplate
      title="Trendnig This Week"
      movies={movies}
      action={(movie) => {
        
      }}
    />
  );

};

export default TrendingThisWeek;
