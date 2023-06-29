import compareClassName from '../../helpers/compareClassName';
import './Baner.scss';

interface IProps {
  children: JSX.Element;
  className?: string;
}

const Baner = ({ children, className = '' }: IProps) => {
  return <div className={compareClassName('baner', className)}>{children}</div>;
};

export default Baner;
