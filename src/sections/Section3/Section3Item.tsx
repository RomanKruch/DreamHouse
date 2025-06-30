import { NavLink } from 'react-router-dom';
import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
import createActiveClass from '../../helpers/createActiveClassName';

interface IProps {
  title: string;
  description: string;
  index: number;
  activeIndex: number | null;
  onClick: (i: number) => void;
}

const Section3Item = ({
  title,
  description,
  activeIndex,
  index,
  onClick,
}: IProps) => {
  const isActive = activeIndex === index;
  return (
    <li
      className={createActiveClass('section3_item', isActive)}
      onClick={() => onClick(index)}
    >
      <h3 className="section3_item_title">{title}</h3>
      <div className="section3_item_wrap">
        <p className="section3_item_description">{description}</p>
        <NavLink to={`/gallery?style=${title}`} className="section3_item_link">
          gallery
          <ArrowIcon />
        </NavLink>
        <NavLink to={`/services?style=${title}`} className="section3_item_link">
          list of services
          <ArrowIcon />
        </NavLink>
      </div>
    </li>
  );
};

export default Section3Item;
