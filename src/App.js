import "./App.css";
import Home from "./pages/Home";
import Apply from "./pages/Apply";
import Login from "./pages/Login";
import Hold from "./pages/Hold";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, createContext, useEffect } from "react";
import MyPage from "./pages/MyPage";
import SignUp from "./pages/SignUp";
import Community from "./pages/Community";
import Write from "./pages/Write";

export const DataContext = createContext();

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [member, setMember] = useState({});
  const getMember = () => {
    try {
      //user data를 가져온다.
      const dummy = {
        name: "홍길동",
        member_id: "hong",
        phonenumber: "010-1234-5678",
      };
      setMember({ type: "GET_USER_DATA", payload: dummy });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (isLogin) {
      getMember();
    }
  }, [isLogin]);
  return (
    <DataContext.Provider
      value={{
        member_id: member.member_id,
        member,
        isLogin,
        setIsLogin,
      }}
    >
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/login" element={<Login />} />
            <Route path="/hold" element={<Hold />} />
            <Route path="/mypage" element={<MyPage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/community/:id" element={<Community />} />
            <Route path="/write" element={<Write />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataContext.Provider>
  );
}

export default App;
