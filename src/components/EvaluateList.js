import EvaluateItem from "./EvaluateItem";

const EvaluateList = ({ evaluateList }) => {
  return (
    <div className="EvaluateList">
      {evaluateList.map((item) => (
        <EvaluateItem key={evaluateList.contest_id} item={item} />
      ))}
    </div>
  );
};
export default EvaluateList;
