
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <div>
      <h1>해당 페이지를 찾지 못했습니다.</h1>
      <h3>주소가 잘못되었거나 더 이상 제공되지 않는 페이지입니다.</h3>
      <StyledLink to="/">메인 페이지로 이동</StyledLink>
    </div>
  );
}
const StyledLink = styled(Link)`
  color: red;
  text-decoration: none; /* 밑줄 제거 */
`;