import { useNavigate } from "react-router-dom";
import Button from "./Button";
const EvaluateItem = ({ item }) => {
  const navigate = useNavigate();

  return (
    <div className="evaluate-item">
      <div className="attend_img_wrapper">
        <img src={item.thumbnail} alt="대회 썸네일" />
      </div>
      <div className="evaluate_name">{item.contest_name}</div>
      <div className="attend_tag">{` #${item.tag.join(" #")}`}</div>
      <div className="button_wrapper">
        <Button text="평가하기" onClick={() => navigate("/evaluate")} />
      </div>
    </div>
  );
};
export default EvaluateItem;
