import './Header.scss';
import Phone from '../../assets/icons/phone_icon';

const Header = () => {
  return (
    <header className="header">
      <div className="header_wrap">
        <button className="header_burgerBtn">
          <span></span>
        </button>
        <p className="header_phone">+38 (097) 987 78 88</p>
      </div>

      <div className="header_call_wrap">
        <p className="header_call_subtitle">request for a call</p>
        <button className="header_call_btn">
          <Phone />
        </button>
      </div>
    </header>
  );
};

export default Header;
