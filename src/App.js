import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { isLoggedInState } from "./recoil/atoms";
import { userNameSelector } from "./recoil/selectors";

function LoginButton() {
  const [isLoggedIn, setLoggedIn] = useRecoilState(isLoggedInState);

  const handleClick = () => {
    setLoggedIn(!isLoggedIn); // 상태 업데이트
  };

  return (
    <button onClick={handleClick}>{isLoggedIn ? "Logout" : "Login"}</button>
  );
}

function WelcomeMessage() {
  const userName = useRecoilValue(userNameSelector);

  return <p>안녕하세요, {userName}님!</p>;
}

function App() {
  return (
    <div>
      <h1>Recoil Example</h1>
      <LoginButton />
      <WelcomeMessage />
    </div>
  );
}

export default App;
