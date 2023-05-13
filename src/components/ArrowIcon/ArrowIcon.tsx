import './ArrowIcon.scss';

interface IProps {
  width?: number;
}

const ArrowIcon = ({ width = 100 }: IProps) => {
  return (
    <div className="arrow">
      <div className="arrow_line" style={{ width }}></div>
      <div className="arrow_tip"></div>
    </div>
  );
};

export default ArrowIcon;
