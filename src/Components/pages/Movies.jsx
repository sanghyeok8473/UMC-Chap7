import React from 'react';
import { AppContainer } from './Movie.style';
import Movie from '../Movie/Movie';
import { movies } from '../../movieDummy'; 

export default function Movies() {
  return (
    <div>
      <AppContainer>
        {movies.results.map((movie, index) => (
          <Movie
            key={index}
            title={movie.title}
            poster_path={movie.poster_path}
            vote_average={movie.vote_average}
            overview={movie.overview}
          />
        ))}
      </AppContainer>
    </div>
  );
}
