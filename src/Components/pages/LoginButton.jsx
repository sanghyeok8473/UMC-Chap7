import React from 'react'
import styled from 'styled-components';

export default function LoginButton() {
  return (
    <LoginButtonContainer>로그인</LoginButtonContainer>
  )
}

const LoginButtonContainer = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
`;
