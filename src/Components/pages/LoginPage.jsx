import React, { useState } from 'react';
import styled from 'styled-components';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);

    if (emailValid(value)) {
      setEmailMessage(<span style={{ color: 'green' }}>올바른 메일 형식입니다!</span>);
    } else {
      setEmailMessage(<span style={{ color: 'red' }}>올바른 이메일을 입력해주세요.</span>);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);

    if (passwordValid(value)) {
      setPasswordMessage(<span style={{ color: 'green' }}>안전한 비밀번호입니다!</span>);
    } else {
      setPasswordMessage(<span style={{ color: 'red' }}>영어+숫자+특수문자를 조합하여 작성해주세요. 8자 이상이어야 합니다.</span>);
    }
  };
  
  /*const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };*/

  const emailValid = (value) => {
    const checkRegExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/;
    return checkRegExp.test(value);
  };

  const passwordValid = (value) => {
    const checkRegExp = /^(?=.*?[a-zA-Z])(?=.*?[0-9])(?=.*?[~?!@#$%^&*_-]).{8,}$/;
    return checkRegExp.test(value);
  };

  return (
    <form /*onSubmit={handleSubmit}*/>
      <h1>이메일과 비밀번호를<br />입력해주세요</h1>
      <TitleContainer>이메일 주소</TitleContainer>
      <EmailContainer
        type="text"
        name="username"
        placeholder="이메일 주소"
        value={email}
        onChange={handleEmailChange}
      />
      <MessageContainer>{emailMessage}</MessageContainer>
      <TitleContainer>비밀번호</TitleContainer>
      <PasswordContainer
        type="password"
        name="password"
        placeholder="영문, 숫자, 특수문자 포함 8자 이상"
        value={password}
        onChange={handlePasswordChange}
      />
      <MessageContainer>{passwordMessage}</MessageContainer>
      <br />
      <CheckButton type="submit" value="확인" />
    </form>
  );
}

const TitleContainer = styled.div`
  margin-top: 15px;
`;

const EmailContainer = styled.input`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
`;

const PasswordContainer = styled.input`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  border-radius: 10px;
`;

const MessageContainer = styled.div`
  margin-top: 5px;
  height: 15px;
  font-size: 14px;
`;

const CheckButton = styled.input`
  width: 50%;
  height: 50px;
  margin-top: 10px;
  border-radius: 25px;
  background-color: #22254b;
  color: #fff;
`;
