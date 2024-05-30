import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { AppContainer } from './Movie.style';
import Movie from '../Movie/Movie';
import { movies } from '../../movieDummy'; 
import MovieDetail from './MovieDetail';
import NotFound from './NotFound';

export default function Movies() {
  const navigate = useNavigate();

  const handleMovieClick = (title) => {
    navigate(`/movie/${title}`);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <AppContainer>
            {movies.results.map((movie, index) => (
              <Movie
                key={index}
                title={movie.title}
                poster_path={movie.poster_path}
                vote_average={movie.vote_average}
                overview={movie.overview}
                onClick={() => handleMovieClick(movie.title)}
              />
            ))}
          </AppContainer>
        } />
        <Route path=":title" element={<MovieDetailWrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function MovieDetailWrapper() {
  const { title } = useParams();
  const movie = movies.results.find(movie => movie.title === title);

  if (!movie) {
    return <NotFound />;
  }
  
  return <MovieDetail movie={movie} />;
}
