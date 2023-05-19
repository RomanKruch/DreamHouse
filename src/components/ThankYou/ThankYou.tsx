import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import './ThankYou.scss';

interface IProps {
  setIsOpen: (v: boolean) => void;
}

const ThankYou = ({ setIsOpen }: IProps) => {
  return (
    <div className="thankYou">
      <h2 className="thankYou_title">thank you for your application!</h2>
      <p className="thankYou_subtitle">Our manager will contact you shortly.</p>
      <BtnWithArrow
        text="return to the main page"
        white={true}
        onClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export default ThankYou;
