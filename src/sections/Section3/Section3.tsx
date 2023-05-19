import './Section3.scss';
import data from '../../data/section3';
import Section3Item from './Section3Item';

const Section3 = () => {
  return (
    <section className="section3" id="3">
      <ul className="section3_list">

        {data.map(item => (
          <Section3Item
            title={item.title}
            description={item.description}
            key={item.title}
          />
        ))}
        
      </ul>
    </section>
  );
};

export default Section3;
