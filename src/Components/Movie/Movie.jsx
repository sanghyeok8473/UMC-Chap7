import React, { useRef } from 'react';

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

import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
`;

export const AppContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const MovieContainer = styled.div`
    position: relative;
    width: 250px;
    margin: 16px;
    background-color: #373b69;
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
    max-width: 100%;
`;

export const MovieInfo = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const MovieTitle = styled.h4`
    margin: 0;
`;

export const VoteAverage = styled.span`
    margin-left: 3px;
`;

export const DetailContainer = styled.div`
    display: none;
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border-radius: 5px;
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
    max-width: 100%;
`;

export const MovieDetail = styled.div`
    padding: 20px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
`;

export const DetailTitle = styled.h4`
    font-weight: bold;
    font-size: 16px;
`;