import React from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { AppContainer } from './Movie.style';
import Movie from '../Movie/Movie';
import { tvs } from '../../tvDummy'; 
import TVDetail from './TVDetail';
import NotFound from './NotFound';

export default function TV() {
  const navigate = useNavigate();

  const handleMovieClick = (name) => {
    navigate(`/tv/${name}`);
  };

  return (
    <div>
      <Routes>
        <Route path="/" element={
          <AppContainer>
            {tvs.results.map((tv, index) => (
              <Movie
                key={index}
                title={tv.name}
                poster_path={tv.poster_path}
                vote_average={tv.vote_average}
                overview={tv.overview}
                onClick={() => handleMovieClick(tv.name)}
              />
            ))}
          </AppContainer>
        } />
        <Route path=":name" element={<TvDetailWrapper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

function TvDetailWrapper() {
  const { name } = useParams();
  const tv = tvs.results.find(tv => tv.name === name);

  if (!tv) {
    return <NotFound />;
  }

  return <TVDetail tv={tv} />;
}
