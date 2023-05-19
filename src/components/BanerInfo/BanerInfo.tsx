import './BanerInfo.scss';

interface IProps {
  title: string;
  description: string;
}

const BanerInfo = ({ title, description }: IProps) => {
  return (
    <>
      <h2 className="banerInfo_title">{title}</h2>
      <p className="banerInfo_description">{description}</p>
    </>
  );
};

export default BanerInfo;
