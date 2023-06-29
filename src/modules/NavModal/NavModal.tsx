import Modal from '../../common/Modal/Modal';
import './NavModal.scss';

interface IProps {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
}

const NavModal = ({ isOpen, setIsOpen }: IProps) => {
  if (!isOpen) {
    return <></>;
  }

  return (
    <Modal>
      <ul className="navModal_list">
        <li className="navModal_item">
          <a
            href="#3"
            className="navModal_link"
            onClick={() => setIsOpen(false)}
          >
            styles of rennovation
          </a>
        </li>
        <li className="navModal_item">
          <a
            href="#4"
            className="navModal_link"
            onClick={() => setIsOpen(false)}
          >
            Costs
          </a>
        </li>
        <li className="navModal_item">
          <a
            href="#5"
            className="navModal_link"
            onClick={() => setIsOpen(false)}
          >
            5 steps to DREAM HOUSE
          </a>
        </li>
        <li className="navModal_item">
          <a
            href="#6"
            className="navModal_link"
            onClick={() => setIsOpen(false)}
          >
            additional services
          </a>
        </li>
        <li className="navModal_item">
          <a href="" className="navModal_link" onClick={() => setIsOpen(false)}>
            BLOG
          </a>
        </li>
      </ul>
    </Modal>
  );
};

export default NavModal;
