import { NavLink, useNavigate } from 'react-router-dom';
import Modal from '../../common/Modal/Modal';
import createActiveClass from '../../helpers/createActiveClassName';
import './NavModal.scss';

interface IProps {
  activeSectionId: string;
}

const NavModal = ({ activeSectionId }: IProps) => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigate = useNavigate();

  const onClick = (id: string) => {
    return () => {
      scrollToSection(id);
      navigate('/');
    };
  };

  return (
    <Modal>
      <ul className="navModal_list">
        <li className="navModal_item">
          <button
            className={createActiveClass(
              'navModal_link',
              activeSectionId === '3',
            )}
            onClick={onClick('3')}
          >
            styles of rennovation
          </button>
        </li>
        <li className="navModal_item">
          <button
            className={createActiveClass(
              'navModal_link',
              activeSectionId === '4',
            )}
            onClick={onClick('4')}
          >
            Costs
          </button>
        </li>
        <li className="navModal_item">
          <button
            className={createActiveClass(
              'navModal_link',
              activeSectionId === '5',
            )}
            onClick={onClick('5')}
          >
            5 steps to DREAM HOUSE
          </button>
        </li>
        <li className="navModal_item">
          <button
            className={createActiveClass(
              'navModal_link',
              activeSectionId === '6',
            )}
            onClick={onClick('6')}
          >
            additional services
          </button>
        </li>
        <li className="navModal_item">
          <NavLink to="/about" className="navModal_link">
            About Us
          </NavLink>
        </li>
      </ul>
    </Modal>
  );
};

export default NavModal;
