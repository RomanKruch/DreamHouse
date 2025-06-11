import './BtnWithArrow.scss';
import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
import createClassName from '../../helpers/createClassName';

interface IProps {
  text: string;
  white?: boolean;
  onClick?: () => void;
  className?: string;
}

const BtnWithArrow = ({
  text,
  white = false,
  onClick,
  className = '',
}: IProps) => {
  return (
    <button
      className={
        createClassName('btnWithArrow', 'white', white) + ' ' + className
      }
      onClick={onClick}
    >
      {text}
      <ArrowIcon />
    </button>
  );
};

export default BtnWithArrow;
