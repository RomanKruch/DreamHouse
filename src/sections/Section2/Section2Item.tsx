interface IProps {
  title: string;
  subtitle: string;
}

const Section2Item = ({ title, subtitle }: IProps) => {
  return (
    <li className="section2_item">
      <h3 className="section2_item_title">{title}</h3>
      <p className="section2_item_subtitle">{subtitle}</p>
    </li>
  );
};

export default Section2Item;
