import React, { Component } from 'react';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const isLoggedIn = this.state.isLoggedIn;

    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div className="login-control">
        {button}
        <Greetings isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function Greetings(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <span>환영합니다!</span>;
  }
  return <span>로그인 해주세요!!</span>;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>로그인</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>로그아웃</button>;
}

export default LoginControl;
