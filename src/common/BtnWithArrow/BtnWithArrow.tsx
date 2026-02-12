import './BtnWithArrow.scss';
import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
import createClassName from '../../helpers/createClassName';

interface IProps {
  text: string;
  white?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

const BtnWithArrow = ({
  text,
  white = false,
  onClick,
  className = '',
  disabled = false,
}: IProps) => {
  return (
    <button
      className={
        createClassName('btnWithArrow', 'white', white) + ' ' + className
      }
      onClick={onClick}
      disabled={disabled}
    >
      {text}
      <ArrowIcon />
    </button>
  );
};

export default BtnWithArrow;
