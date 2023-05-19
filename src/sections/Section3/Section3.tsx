import ArrowIcon from '../../assets/icons/ArrowIcon/ArrowIcon';
import './Section3.scss';

const Section3 = () => {
  return (
    <section className="section3" id="3">
      <ul className="section3_list">
        <li className="section3_item">
          <h3 className="section3_item_title">elite</h3>
          <div className="section3_item_wrap">
            <p className="section3_item_description">
              THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR
              THOSE WHO WANTS TO GET THE PERFECT RESULT.
            </p>
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
        <li className="section3_item">
          <h3 className="section3_item_title">vip</h3>
          <div className="section3_item_wrap">
            <p className="section3_item_description">
              THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR
              THOSE WHO WANTS TO GET THE PERFECT RESULT.
            </p>
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
        <li className="section3_item">
          <h3 className="section3_item_title">extra</h3>
          <div className="section3_item_wrap">
            <p className="section3_item_description">
              THE VIP STYLE INCLUDES AN EXTENDED SET OF WORKS. SUITABLE FOR
              THOSE WHO WANTS TO GET THE PERFECT RESULT.
            </p>
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
      </ul>
    </section>
  );
};

export default Section3;
