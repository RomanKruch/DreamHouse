import './Baner.scss';

interface IProps {
  children: JSX.Element;
}

const Baner = ({ children }: IProps) => {
  return <div className="Baner">{children}</div>;
};

export default Baner;
