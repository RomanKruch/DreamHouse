import { useNavigate } from 'react-router-dom';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import './ThankYou.scss';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankYou">
      <h2 className="thankYou_title">thank you for your application!</h2>
      <p className="thankYou_subtitle">Our manager will contact you shortly.</p>
      <BtnWithArrow
        text="return to the main page"
        white={true}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default ThankYou;
