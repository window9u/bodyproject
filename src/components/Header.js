const Header = ({ left, right, middle }) => {
  return (
    <header>
      <div className="header_left">{left}</div>
      <div className="header_middle">{middle}</div>
      <div className="header_right">{right}</div>
    </header>
  );
};
export default Header;
