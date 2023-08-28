import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";
import { DataContext } from "../App";
import { useState, useRef } from "react";

const Login = () => {
  const navigate = useNavigate();
  const { isLogin, setIsLogin } = useContext(DataContext);
  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  }, [isLogin, navigate]);
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const idRef = useRef();
  const passwordRef = useRef();

  const submit = () => {
    //로그인 요청
    //성공하면 isLogin을 true로 바꾸고
    //실패하면 alert 후 아이디 input에 focus
    setIsLogin(true);
    navigate("/");
  };
  return (
    <div>
      <div className="id">
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          ref={idRef}
          type="text"
          placeholder="아이디를 입력해주세요"
        />
      </div>
      <div className="password">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <button onClick={submit}>로그인</button>
      <button onClick={() => navigate("/signup")}>회원가입</button>
    </div>
  );
};
export default Login;
