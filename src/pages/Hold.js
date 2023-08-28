import { useState } from "react";

const Hold = () => {
  const [submitData, setSubmitData] = useState({
    constest_name: "",
    contest_description: "",
    contest_start_date: "",
    contest_end_date: "",
    contest_rule: "",
    contest_reward: "",
    contest_finalist: "",
    contest_condition: "",
    contest_example_img: "",
    contest_thumbnail: "",
  });
  const submit = () => {
    //submitData를 서버로 보낸다.
    console.log(submitData);
  };
  return (
    <div className="Hold">
      <section>
        <h1>대회 제목</h1>
        <input type="text" placeholder="대회 제목을 입력하세요." />
      </section>
      <section>
        <h1>대회 설명</h1>
        <textarea placeholder="대회 제목을 입력하세요." />
      </section>
      <section>
        <h1>대회 기간</h1>
      </section>
      <section>
        <h1>대회 룰 설정</h1>
      </section>
      <section>
        <h1>부상</h1>
      </section>
      <section>
        <h1>본선 인원</h1>
      </section>
      <section>
        <h1>참가 조건</h1>
      </section>
      <section>
        <h1>포징 예시</h1>
        <textarea placeholder="포징 설명에대한 평가 규정을작성해주세요"></textarea>
      </section>
    </div>
  );
};
export default Hold;
