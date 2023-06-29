import logo from '../../assets/logo.png';

interface IProps {
  className?: string;
}

const Logo = ({ className = '' }: IProps) => {
  return (
    <a className={className}>
      <img src={logo} alt="logo" width={50} height={57} />
    </a>
  );
};

export default Logo;
