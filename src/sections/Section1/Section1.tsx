import './Section1.scss';
import title from '../../assets/title.png';
import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';

const Section1 = () => {
  return (
    <section className="section1" id="1">
      <img src={title} alt="title" className="section1_title" />
      <RegistrationBaner className="section1_baner" />
    </section>
  );
};

export default Section1;
