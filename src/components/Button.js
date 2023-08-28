const Button = ({ text, onClick, type }) => {
  return (
    <button
      className={["Button", `Button_${type}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
Button.defaultProps = { type: "clear" };
export default Button;
