import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
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