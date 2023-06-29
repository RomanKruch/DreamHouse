import './BanerInfo.scss';

interface IProps {
  title: string;
  description: string;
}

const BanerInfo = ({ title, description }: IProps) => {
  return (
    <div>
      <h2 className="banerInfo_title">{title}</h2>
      <p className="banerInfo_description">{description}</p>
    </div>
  );
};

export default BanerInfo;
