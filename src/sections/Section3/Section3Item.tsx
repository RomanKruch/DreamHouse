import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
interface IProps {
  title: string;
  description: string;
}

const Section3Item = ({ title, description }: IProps) => {
  return (
    <li className="section3_item">
      <h3 className="section3_item_title">{title}</h3>
      <div className="section3_item_wrap">
        <p className="section3_item_description">{description}</p>
        <a className="section3_item_link">
          gallery
          <ArrowIcon width={115} />
        </a>
        <a className="section3_item_link">
          list of services
          <ArrowIcon width={57} />
        </a>
      </div>
    </li>
  );
};

export default Section3Item;
