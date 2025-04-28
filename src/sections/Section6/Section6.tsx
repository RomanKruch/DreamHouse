import './Section6.scss';
import { useState } from 'react';
// import Baner from '../../components/Baner/Baner';
import createActiveClass from '../../helpers/createActiveClassName';
// import BanerInfo from '../../components/BanerInfo/BanerInfo';
import data from '../../data/section6';

const Section6 = () => {
  const [selectedI, setSelectedI] = useState(0);

  return (
    <section className="section6" id="6">
      <div className="container">
        <ul className="section6_list">
          {data.map(({ title, img }, i) => (
            <li
              className={createActiveClass('section6_item', selectedI === i)}
              key={title}
              onClick={() => setSelectedI(i)}
            >
              <img src={img} alt={title} className="section6_item_img" />
              <div className="section6_item_overlay">
                <h3 className="section6_item_title">{title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* <Baner>
        <BanerInfo
          title={data[selectedI].title}
          description={data[selectedI].title}
        />
      </Baner> */}
    </section>
  );
};

export default Section6;
