import React, { useState } from 'react';

// LoginControl 컴포넌트를 함수형으로 선언합니다.
function LoginControl() {
  // useState 훅을 사용하여 상태를 관리합니다.
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 버튼을 클릭했을 때 호출되는 함수입니다.
  const handleLoginClick = () => {
    // isLoggedIn 상태를 true로 변경하여 사용자가 로그인 상태임을 나타냅니다.
    setIsLoggedIn(true);
  };

  // 로그아웃 버튼을 클릭했을 때 호출되는 함수입니다.
  const handleLogoutClick = () => {
    // isLoggedIn 상태를 false로 변경하여 사용자가 로그아웃 상태임을 나타냅니다.
    setIsLoggedIn(false);
  };

  // 로그인 상태에 따라 다른 버튼을 표시합니다.
  let button;
  if (isLoggedIn) {
    // 사용자가 로그인 상태인 경우 로그아웃 버튼을 생성합니다.
    button = <LogoutButton onClick={handleLogoutClick} />;
  } else {
    // 사용자가 로그아웃 상태인 경우 로그인 버튼을 생성합니다.
    button = <LoginButton onClick={handleLoginClick} />;
  }

  // 환영 문구와 버튼을 렌더링합니다.
  return (
    <div className="login-control">
      {button}
      {/* 사용자의 로그인 상태에 따라 다른 환영 문구를 표시합니다. */}
      <Greetings isLoggedIn={isLoggedIn} />
    </div>
  );
}

// 사용자의 로그인 상태에 따라 다른 환영 문구를 표시하는 함수형 컴포넌트입니다.
function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    // 사용자가 로그인 상태인 경우 환영 문구를 반환합니다.
    return <span>환영합니다!</span>;
  }
  // 사용자가 로그아웃 상태인 경우 로그인 문구를 반환합니다.
  return <span>로그인 해주세요!!</span>;
}

// 로그인 버튼을 생성하는 함수형 컴포넌트입니다.
function LoginButton(props) {
  return <button onClick={props.onClick}>로그인</button>;
}

// 로그아웃 버튼을 생성하는 함수형 컴포넌트입니다.
function LogoutButton(props) {
  return <button onClick={props.onClick}>로그아웃</button>;
}

// LoginControl 컴포넌트를 외부로 내보냅니다.
export default LoginControl;
