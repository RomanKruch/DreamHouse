import ArrowIcon from '../ArrowIcon/ArrowIcon';
import RegistrationBaner from '../RegistrationBaner/RegistrationBaner';
import './Section2.scss';

const Section2 = () => {
  return (
    <section className="section2" id="2">
      <div className="container">
        <h2 className="section2_title">elite renovation of your apartment</h2>

        <ul className="section2_list">
          <li className="section2_item">
            <h3 className="section2_item_title">18</h3>
            <p className="section2_item_subtitle">years on the market</p>
          </li>
          <li className="section2_item">
            <h3 className="section2_item_title">237</h3>
            <p className="section2_item_subtitle">completed projects</p>
          </li>
          <li className="section2_item">
            <h3 className="section2_item_title">50</h3>
            <p className="section2_item_subtitle">employees</p>
          </li>
        </ul>
        <a className="section2_link">
          more info about us <ArrowIcon width={95} />
        </a>
      </div>

      <RegistrationBaner />
    </section>
  );
};

export default Section2;
