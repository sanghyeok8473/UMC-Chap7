import React, { useRef } from 'react';
import { Container, MovieContainer, MovieImage, MovieInfo, MovieTitle, VoteAverage, DetailContainer, MovieDetail, DetailTitle } from './Movie.style';

const BASE_URL = "https://image.tmdb.org/t/p/w1280/";

export default function Movie({ title, poster_path, vote_average, overview, onClick }) {
    /*const detailContainerRef = useRef(null);

    const handleMouseEnter = () => {
        if (detailContainerRef.current) {
            detailContainerRef.current.style.display = 'table';
        }
    };

    const handleMouseLeave = () => {
        if (detailContainerRef.current) {
            detailContainerRef.current.style.display = 'none';
        }
    };*/

    return (
        <Container>
            <MovieContainer onClick={onClick}>
                <MovieImage src={BASE_URL + poster_path} alt="Movie Poster" />
                <MovieInfo>
                    <MovieTitle>{title}</MovieTitle>
                    <VoteAverage>{vote_average}</VoteAverage>
                </MovieInfo>
                <DetailContainer>
                    <MovieDetail>
                        <DetailTitle>{title}</DetailTitle>
                        <span>{overview}</span>
                    </MovieDetail>
                </DetailContainer>
            </MovieContainer>
        </Container>
        /*<Container>
            <MovieContainer onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <MovieImage src={BASE_URL + poster_path} alt="Movie Poster"/>
                <MovieInfo>
                    <MovieTitle>{title}</MovieTitle>
                    <VoteAverage>{vote_average}</VoteAverage>
                </MovieInfo>
                <DetailContainer /*ref={detailContainerRef}>
                    <MovieDetail>
                        <DetailTitle>{title}</DetailTitle>
                        <span>{overview}</span>
                    </MovieDetail>
                </DetailContainer>
            </MovieContainer>
        </Container>*/
    );
}