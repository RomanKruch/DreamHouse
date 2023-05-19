import './Header.scss';
import Phone from '../../assets/icons/phone_icon';
import CloseIcon from '../../assets/icons/close_icon';
import createActiveClass from '../../helpers/createClassName';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <header className="header">
      <div className="header_wrap">
        {!isOpen && (
          <>
            <button className="header_burgerBtn">
              <span></span>
            </button>
            <p className="header_phone">+38 (097) 987 78 88</p>
          </>
        )}
      </div>

      <div className="header_call_wrap">
        <p className="header_call_subtitle">request for a call</p>
        <button
          className={createActiveClass('header_call_btn', isOpen)}
          onClick={() => setIsOpen(state => !state)}
        >
          {isOpen ? <CloseIcon /> : <Phone />}
        </button>
      </div>
    </header>
  );
};

export default Header;
