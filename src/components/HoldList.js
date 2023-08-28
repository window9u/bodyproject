import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useEffect, useState } from "react";
import HoldItem from "./HoldItem";

function TaskStatus({ ListSatatus, setListStatus }) {
  const handleStatusChange = (event) => {
    setListStatus(Number(event.target.value));
  };

  return (
    <div>
      <h2>작업 상태 선택</h2>
      <form>
        <label>
          <input
            type="radio"
            value="1"
            checked={ListSatatus === 1}
            name="statusRadio"
            onChange={handleStatusChange}
          />
          진행예정
        </label>
        <label>
          <input
            type="radio"
            value="2"
            checked={ListSatatus === 2}
            name="statusRadio"
            onChange={handleStatusChange}
          />
          진행중
        </label>
        <label>
          <input
            type="radio"
            value="3"
            checked={ListSatatus === 3}
            name="statusRadio"
            onChange={handleStatusChange}
          />
          완료
        </label>
      </form>
    </div>
  );
}

const HoldList = ({ holdList }) => {
  const navigate = useNavigate();
  const [ListSatatus, setListStatus] = useState(1); // 1: 진행예정, 2: 진행중, 3: 완료
  const [filteredList, setFilteredList] = useState([]);
  const cur_Date = new Date().getTime();
  useEffect(() => {
    //ListStatus에 따라서 holdList를 필터링하여 filteredList에 저장
    if (ListSatatus === 1)
      setFilteredList(
        holdList.filter(
          (item) => new Date(item.start_date).getTime() > cur_Date
        )
      );
    else if (ListSatatus === 2)
      setFilteredList(
        holdList.filter(
          (item) =>
            item.start_date <= cur_Date &&
            new Date(item.due_date).getTime() >= cur_Date
        )
      );
    else if (ListSatatus === 3)
      setFilteredList(
        holdList.filter((item) => new Date(item.due_date).getTime() < cur_Date)
      );
  }, [holdList, cur_Date, ListSatatus]);
  return (
    <div className="HoldList">
      <section className="HoldContest">
        <h1>대회 개최</h1>
        <h2>대회의 주최자가 되어서 대회를 개최할 수 있습니다.</h2>
        <Button text="개최하기" onClick={() => navigate("/Hold")} />
      </section>
      <section className="HoldList">
        <h1>내가 개최한 대회</h1>
        <h2>내가 개최한 대회 리스트를 확인할 수 있어요.</h2>
        {TaskStatus({ ListSatatus, setListStatus })}
        {filteredList.length === 0
          ? "아직 개최한 대회가 없어요"
          : filteredList.map((item) => (
              <HoldItem key={item.contest_id} holditem={item} />
            ))}
      </section>
    </div>
  );
};
export default HoldList;
