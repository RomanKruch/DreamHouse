import './Header.scss';
import Phone from '../../assets/icons/phone_icon';
import CloseIcon from '../../assets/icons/close_icon';
import createActiveClass from '../../helpers/createActiveClassName';
import Logo from '../../common/Logo/Logo';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavBtn = () => {
    if (location.pathname === '/navigation') {
      navigate('/');
    } else {
      navigate('/navigation');
    }
  };

  const onCallBtn = () => {
    if (location.pathname === '/call') {
      navigate('/');
    } else {
      navigate('/call');
    }
  };

  return (
    <header className="header">
      <div className="header_wrap">
        <Logo className="header_logo" />
        <button
          className={createActiveClass(
            'header_burgerBtn',
            location.pathname === '/navigation',
          )}
          onClick={onNavBtn}
        >
          <span></span>
        </button>
      </div>

      <div className="header_call_wrap">
        <p className="header_call_subtitle">request for a call</p>
        <button
          className={createActiveClass(
            'header_call_btn',
            location.pathname === '/call',
          )}
          onClick={onCallBtn}
        >
          {location.pathname === '/call' ? <CloseIcon /> : <Phone />}
        </button>
      </div>
    </header>
  );
};

export default Header;
