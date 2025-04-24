import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

interface IProps {
  className?: string;
}

const Logo = ({ className = '' }: IProps) => {
  return (
    <NavLink to="/" className={className}>
      <img src={logo} alt="logo" width={50} height={57} />
    </NavLink>
  );
};

export default Logo;
