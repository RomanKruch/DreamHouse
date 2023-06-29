import './Header.scss';
import Phone from '../../assets/icons/phone_icon';
import CloseIcon from '../../assets/icons/close_icon';
import createActiveClass from '../../helpers/createActiveClassName';
import Logo from '../../common/Logo/Logo';

interface IProps {
  isOpenCall: boolean;
  setIsOpenCall: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenNav: boolean;
  setIsOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({
  isOpenCall,
  setIsOpenCall,
  isOpenNav,
  setIsOpenNav,
}: IProps) => {
  return (
    <header className="header">
      <div className="header_wrap">
        {!isOpenCall && (
          <>
            <Logo className='header_logo'/>
            <button
              className={createActiveClass('header_burgerBtn', isOpenNav)}
              onClick={() => setIsOpenNav(state => !state)}
            >
              <span></span>
            </button>
            <p className="header_phone">+38 (097) 987 78 88</p>
          </>
        )}
      </div>

      <div className="header_call_wrap">
        <p className="header_call_subtitle">request for a call</p>
        <button
          className={createActiveClass('header_call_btn', isOpenCall)}
          onClick={() => {
            setIsOpenCall(state => !state);
            setIsOpenNav(false);
          }}
        >
          {isOpenCall ? <CloseIcon /> : <Phone />}
        </button>
      </div>
    </header>
  );
};

export default Header;
