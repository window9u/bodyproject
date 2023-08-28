import AttendItem from "./AttendItem";

const AttendList = ({ attendList }) => {
  return (
    <div className="AttendList">
      {attendList.map((it) => (
        <AttendItem key={it.contest_id} attend={it} />
      ))}
    </div>
  );
};

export default AttendList;
