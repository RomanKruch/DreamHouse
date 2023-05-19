import './Section6.scss';
import { useState } from 'react';
import img1 from '../../assets/section-6/img-1.jpg';
import img2 from '../../assets/section-6/img-2.jpg';
import img3 from '../../assets/section-6/img-3.jpg';
import img4 from '../../assets/section-6/img-4.jpg';
import img5 from '../../assets/section-6/img-5.jpg';
import Baner from '../../components/Baner/Baner';
import RegForm from '../../components/RegForm/RegForm';
import createActiveClass from '../../helpers/createActiveClassName';
import BanerInfo from '../../components/BanerInfo/BanerInfo';

const items = [
  {
    img: img1,
    width: 580,
    height: 520,
    title: 'Online broadcast of repair',
  },
  {
    img: img2,
    width: 420,
    height: 729,
    title: 'Video- surveillance and alarm',
  },
  {
    img: img3,
    width: 360,
    height: 360,
    title: 'Selection of furniture',
  },
  {
    img: img4,
    width: 380,
    height: 380,
    title: 'Household appliances',
  },
  {
    img: img5,
    width: 320,
    height: 280,
    title: 'Ultra service',
  },
];

const Section6 = () => {
  const [selectedI, setSelectedI] = useState(0);

  return (
    <section className="section6" id="6">
      <ul className="section6_list">
        {items.map(({ title, img, width, height }, i) => (
          <li
            className={createActiveClass('section6_item', selectedI === i)}
            key={title}
            style={{ width, height }}
            onClick={() => setSelectedI(i)}
          >
            <img
              src={img}
              alt={title}
              className="section6_item_img"
              width={width}
              height={height}
            />
            <div className="section6_item_overlay">
              <h3 className="section6_item_title">{title}</h3>
            </div>
          </li>
        ))}
      </ul>
      <Baner>
        <BanerInfo
          title={items[selectedI].title}
          description={items[selectedI].title}
        />
      </Baner>
    </section>
  );
};

export default Section6;
