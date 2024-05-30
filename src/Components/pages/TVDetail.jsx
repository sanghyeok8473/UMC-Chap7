import React from 'react';
import styled from 'styled-components';

export default function TVDetail({ tv }) {
  return (
    <DetailContainer>
      <h1>{tv.name}</h1>
      <PosterImage src={`https://image.tmdb.org/t/p/w1280/${tv.poster_path}`} alt={tv.name} />
    </DetailContainer>
  );
}

const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const PosterImage = styled.img`
  width: 300px; 
  max-width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
