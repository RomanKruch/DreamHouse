import { useState } from 'react';
import './Section4.scss';
import createActiveClass from '../../helpers/createActiveClassName';
import Baner from '../../components/Baner/Baner';
import BanerInfo from '../../components/BanerInfo/BanerInfo';
import data from '../../data/section4';
import Section4Item from './Section4Item';
import Range from '../../components/Range/Range';
import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';

const Section4 = () => {
  const max = 125;
  const [value, setValue] = useState(30);
  const [selectedI, setSelectedI] = useState(0);

  return (
    <section className="section4" id="4">
      <div className="container">
        <h2 className="section4_title">
          Select an area size & one of the service packages:
        </h2>
        <div className="section4_wrap">
          <Range max={max} value={value} setValue={setValue} />

          <div className="section4_select">
            <div className="section4_select_titles_wrap">
              {data.map(item => (
                <h3 className="section4_select_title" key={item.id}>
                  {item.title}
                </h3>
              ))}
            </div>
            <div className="section4_select_btn_wrap">
              <div
                className={createActiveClass('section4_select_line', true)}
              ></div>

              {data.map((_, i) => (
                <Section4Item
                  i={i}
                  selectedI={selectedI}
                  setSelectedI={setSelectedI}
                  key={i}
                />
              ))}
              <div
                className={createActiveClass(
                  'section4_select_arrow',
                  selectedI >= 2,
                )}
              ></div>
            </div>
          </div>

          <div className="section4_price">
            <p className="section4_price_numbers">
              {value * (selectedI + 1) * 253}
            </p>
            <p className="section4_price_currency">UAH</p>
          </div>
        </div>
      </div>

      {window.innerWidth > 1023 ? (
        <Baner>
          <BanerInfo
            title={data[selectedI].title}
            description={data[selectedI].description}
          />
        </Baner>
      ) : (
        <RegistrationBaner className="section4_baner" />
      )}
    </section>
  );
};

export default Section4;
