import { DataContext } from "../App";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Menu from "../components/Menu";
import AttendList from "../components/AttendList";
import HoldList from "../components/HoldList";
import EvaluateList from "../components/EvaluateList";

const Home = () => {
  const navigate = useNavigate();
  const { isLogin } = useContext(DataContext);
  const [attendList, setAttendList] = useState([]);
  const [holdList, setHoldList] = useState([]);
  const [evaluateList, setEvaluateList] = useState([]); //대회 심사 리스트

  //1: 참가리스트, 2: 심사리스트, 3: 개최리스트
  const [selectList, setSelectList] = useState(1); //대회 참가 여부

  const getAttendList = () => {
    try {
      //대회 목록을 가져온다.
      const dummy = [
        {
          contest_id: 1,
          contest_name: "공붕이 대회",
          tag: ["체급 무제한", "건국대 학생"],
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          public_or_private: "public",
          password: "1234",
        },
        {
          contest_id: 2,
          contest_name: "제이피티 대회",
          tag: ["체급 무제한", "제이피티 회원"],
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          public_or_private: "public",
          password: "1234",
        },
      ];
      setAttendList(dummy);
    } catch (e) {
      console.log(e);
    }
  };
  const getHoldList = () => {
    try {
      //user의 id로 개최한 대회 목록을 가져온다.
      const dummy = [
        {
          contest_id: 1,
          contest_name: "공붕이 대회",
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          due_date: "2023-08-10",
          start_date: "2023-08-20",
        },
        {
          contest_id: 2,
          contest_name: "제이피티 대회",
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          due_date: "2023-08-30",
          start_date: "2023-09-20",
        },
      ];
      setHoldList(dummy);
    } catch (e) {
      console.log(e);
    }
  };
  const getEvaluateList = () => {
    try {
      //user의 id로 심사한 대회 목록을 가져온다.
      const dummy = [
        {
          contest_id: 1,
          contest_name: "공붕이 대회",
          tag: ["체급 무제한", "건국대 학생"],
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          public_or_private: "public",
          password: "1234",
        },
        {
          contest_id: 2,
          contest_name: "제이피티 대회",
          tag: ["체급 무제한", "제이피티 회원"],
          thumbnail:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
          public_or_private: "public",
          password: "1234",
        },
      ];
      setEvaluateList(dummy);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (!isLogin) {
      navigate("/login");
    }
  }, [isLogin, navigate]);
  useEffect(() => {
    //selectList에 따라서 List를 가져온다.
    if (selectList === 1) {
      getAttendList();
    } else if (selectList === 2) {
      getHoldList();
    } else {
      getEvaluateList();
    }
  }, [selectList]);
  return (
    <div>
      <Header
        left={<Button text="대회 참가" onClick={() => setSelectList(1)} />}
        middle={<Button text="대회 개최" onClick={() => setSelectList(2)} />}
        right={<Button text="대회 심사" onClick={() => setSelectList(3)} />}
      />
      {selectList === 1 ? (
        <AttendList attendList={attendList} />
      ) : selectList === 2 ? (
        <HoldList holdList={holdList} />
      ) : (
        <EvaluateList evaluateList={evaluateList} />
      )}
      <Menu />
    </div>
  );
};
export default Home;
