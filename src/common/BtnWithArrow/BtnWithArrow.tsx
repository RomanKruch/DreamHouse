import './BtnWithArrow.scss';
import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
import createClassName from '../../helpers/createClassName';

interface IProps {
  text: string;
  white?: boolean;
  onClick?: () => void;
}

const BtnWithArrow = ({ text, white = false, onClick }: IProps) => {
  return (
    <button
      className={createClassName('btnWithArrow', 'white', white)}
      onClick={onClick}
    >
      {text}
      <ArrowIcon />
    </button>
  );
};

export default BtnWithArrow;
