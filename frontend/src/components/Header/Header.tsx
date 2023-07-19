import "./Header.css";

const Header = () => {
  return (
    <header className="headerContainer">
      <h1 className="headerLogo">Reedr</h1>
      <ul>
        <li className="headerLink">Home</li>
        <li className="headerLink">Latest</li>
        <li className="headerLink">Ask</li>
      </ul>
    </header>
  );
};

export default Header;
