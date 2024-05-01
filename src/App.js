import React from 'react';
import Movie from './Components/Movie/Movie';
import { movies } from './movieDummy';
import styled from 'styled-components';

function App() {
    return (
        <div>
            <AppContainer>
                {movies.results.map((item, index) => (
                    <Movie
                        key={index}
                        title={item.title}
                        poster_path={item.poster_path}
                        vote_average={item.vote_average}
                        overview={item.overview}
                    />
                ))}
            </AppContainer>
        </div>
    );
}

const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export default App;