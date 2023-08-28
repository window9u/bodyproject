import { useNavigate } from "react-router-dom";
import Button from "./Button";

const AttendItem = ({ attend }) => {
  const navigate = useNavigate();
  return (
    <article className="AttendItem">
      <div className="attend_img_wrapper">
        <img src={attend.thumbnail} alt="대회 썸네일" />
      </div>
      <div className="attend_name">{attend.contest_name}</div>
      <div className="attend_tag">{` #${attend.tag.join(" #")}`}</div>
      <div className="button_wrapper">
        <Button text="참가하기" onClick={() => navigate("/apply")} />
      </div>
    </article>
  );
};
export default AttendItem;
