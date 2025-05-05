import { useNavigate } from 'react-router-dom';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import Modal from '../../common/Modal/Modal';
import './AboutModal.scss';

const AboutModal = () => {
  const navigate = useNavigate();

  return (
    <Modal>
      <div className="aboutModal">
        <h1 className="aboutModal_title">About us</h1>
        <div className="aboutModal_content_wrap">
          <p className="aboutModal_description">
            DreamHouse is a portfolio project that showcases a fictional luxury
            apartment renovation service. It simulates a premium experience
            where users can explore high-end interior styles, interact with a
            clean interface, and discover elegant design concepts.
          </p>
          <p className="aboutModal_description">
            The site was built using React, TypeScript, and SCSS, with a focus
            on smooth UI, responsive layouts, and modern frontend practices.
          </p>
          <p className="aboutModal_description">
            While DreamHouse isn’t a real company, it reflects real design
            thinking, attention to detail, and frontend development skill.
          </p>
        </div>
        <BtnWithArrow
          text="return to the main page"
          white={true}
          onClick={() => navigate('/')}
        />
      </div>
    </Modal>
  );
};

export default AboutModal;
