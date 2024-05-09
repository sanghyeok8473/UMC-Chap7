/*import Movie from './Components/Movie/Movie';
import { movies } from './movieDummy';
import { AppContainer } from './Components/Movie/Movie.style';*/
import React from "react";
import { Route, Routes } from "react-router-dom"; // Switch 대신 Routes를 import합니다.

import Home from "./Components/pages/Home";
import Movies from "./Components/pages/Movies";
import TV from "./Components/pages/TV";
import Celebrity from "./Components/pages/Celebrity";
import Header from "./Components/Header";

function App() {
  return (
    <div className="root-wrap">
      <Header />
      <Routes>
        {" "}
        {/* Switch 대신 Routes를 사용 */}
        <Route exact path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/tv" element={<TV />} />
        <Route path="/person" element={<Celebrity />} />
      </Routes>
    </div>
        
        /*<div>
            <AppContainer>
                {movies.results.map((item) => (
                    <Movie
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview}
                    />
                ))}
            </AppContainer>
        </div>*/
    );
}

export default App;