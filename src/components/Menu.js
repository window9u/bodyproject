import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Menu = () => {
  const navigate = useNavigate();
  return (
    <div className="Menu">
      <Button text="홈" onClick={() => navigate("/")} />
      <Button text="게시판" onClick={() => navigate("/community")} />
      <Button text="글쓰기" onClick={() => navigate("/write")} />
      <Button text="내 정보" onClick={() => navigate("/mypage")} />
    </div>
  );
};
export default Menu;
