import { useNavigate, useSearchParams } from 'react-router-dom';
import { isValidStyle, TStyles } from '../../helpers/isValidStyle';
import Modal from '../../common/Modal/Modal';
import './ServicesModal.scss';
import { servicesList } from './data';
import CloseIcon from '../../assets/icons/close_icon';

const ServicesModal = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const rawStyle = searchParams.get('style');

  const style: TStyles = isValidStyle(rawStyle || '')
    ? (rawStyle as TStyles)
    : 'elite';

  const currentList = servicesList[style];

  const onClose = () => {
    navigate('/');
  };

  return (
    <Modal>
      <div className="servicesModal">
        <h2 className="servicesModal_title">{style}</h2>
        <button className="servicesModal_btn" onClick={onClose}>
          <CloseIcon />
        </button>
        <p className="servicesModal_subtitle">List of services:</p>
        <div className="servicesModal_list_wrap">
          <ul className="servicesModal_list">
            {[...currentList, ...currentList].map((item, i) => (
              <li className="servicesModal_item" key={i}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Modal>
  );
};

export default ServicesModal;
