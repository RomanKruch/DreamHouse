import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
// import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';
import Section2Item from './Section2Item';
import './Section2.scss';
import data from '../../data/section2';

const Section2 = () => {
  return (
    <section className="section2" id="2">
      <div className="container">
        <h2 className="section2_title">elite renovation of your apartment</h2>

        <ul className="section2_list">
          {data.map(item => (
            <Section2Item
              title={item.title}
              subtitle={item.subtitle}
              key={item.title}
            />
          ))}
        </ul>

        <a className="section2_link">
          more info about us <ArrowIcon />
        </a>
      </div>

      {/* <RegistrationBaner /> */}
    </section>
  );
};

export default Section2;
