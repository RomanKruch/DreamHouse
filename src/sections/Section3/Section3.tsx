import './Section3.scss';
import data from '../../data/section3';
import Section3Item from './Section3Item';
import { useState } from 'react';

const Section3 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const onItemClick = (i: number) => {
    if (i === activeIndex) {
      setActiveIndex(null);
    } else {
      setActiveIndex(i);
    }
  };

  return (
    <section className="section3" id="3">
      <ul className="section3_list">
        {data.map((item, index) => (
          <Section3Item
            title={item.title}
            description={item.description}
            index={index}
            activeIndex={activeIndex}
            onClick={onItemClick}
            key={item.title}
          />
        ))}
      </ul>
    </section>
  );
};

export default Section3;
