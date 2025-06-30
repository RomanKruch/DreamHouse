import './Header.scss';
import Phone from '../../assets/icons/phone_icon';
import CloseIcon from '../../assets/icons/close_icon';
import createActiveClass from '../../helpers/createActiveClassName';
import Logo from '../../common/Logo/Logo';
import { useLocation, useNavigate } from 'react-router-dom';

const ModalTypes = ['navigation', 'call', 'about', 'services'];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const query = location.search;

  const basePath = path.split('/');
  const lastSegment = basePath[basePath.length - 1];

  const onOpenModal = (type: string) => () => {
    const isModalOpen = ModalTypes.includes(lastSegment);

    let newPath = '';

    if (isModalOpen) {
      if (lastSegment === type) {
        newPath = path.replace(/\/[^/]*$/, '');
      } else {
        newPath = path.replace(/\/[^/]*$/, '') + '/' + type;
      }
    } else {
      newPath = path + '/' + type;
    }

    if (lastSegment === 'services') {
      navigate('/' + newPath);
    } else {
      navigate('/' + newPath + query);
    }
  };

  return (
    <header className="header">
      <div className="header_wrap">
        <Logo className="header_logo" />
        <button
          className={createActiveClass(
            'header_burgerBtn',
            lastSegment === 'navigation',
          )}
          onClick={onOpenModal('navigation')}
        >
          <span></span>
        </button>
      </div>

      <div className="header_call_wrap">
        <p className="header_call_subtitle">request for a call</p>
        <button
          className={createActiveClass(
            'header_call_btn',
            lastSegment === 'call',
          )}
          onClick={onOpenModal('call')}
        >
          {lastSegment === 'call' ? <CloseIcon /> : <Phone />}
        </button>
      </div>
    </header>
  );
};

export default Header;
