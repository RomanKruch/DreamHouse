import { useNavigate } from 'react-router-dom';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import './ThankYou.scss';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="thankYou">
      <h2 className="thankYou_title">Thank you for your application!</h2>
      <p className="thankYou_subtitle">
        Your request has landed safely in our demo inbox 📬
        <br /> Since this is a portfolio project, no real manager will contact
        you — but your submission was a success! 🎉
      </p>
      <BtnWithArrow
        text="return to the main page"
        white={true}
        onClick={() => navigate('/')}
      />
    </div>
  );
};

export default ThankYou;
