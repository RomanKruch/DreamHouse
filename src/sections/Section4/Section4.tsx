import { useState } from 'react';
import CircleProgressBar from '../../common/CircleProgressBar/CircleProgressBar';
import './Section4.scss';
import createActiveClass from '../../helpers/createActiveClassName';
import Baner from '../../components/Baner/Baner';
import BanerInfo from '../../components/BanerInfo/BanerInfo';
import data from '../../data/section4';
import Section4Item from './Section4Item';

const Section4 = () => {
  const [value, setValue] = useState(30);
  const [selectedI, setSelectedI] = useState(0);

  const max = 130;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inpValue = +e.target.value;

    if (inpValue > max) {
      return setValue(max);
    }

    if (Number.isNaN(inpValue)) {
      return setValue(s => s);
    }

    setValue(inpValue);
  };

  return (
    <section className="section4" id="4">
      <div className="container">
        <h2 className="section4_title">
          Select an area size & one of the service packages:
        </h2>
        <div className="section4_wrap">
          <div className="section4_range">
            <p className="section4_range_title">m²</p>
            <div className="section4_range_wrap">
              <CircleProgressBar value={value} max={max} />
              <input
                type="text"
                className="section4_range_inp"
                value={value + ''}
                onChange={onChange}
              />
            </div>
          </div>

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

          <p className="section4_price_numbers">
            {value * (selectedI + 1) * 253}
          </p>
          <p className="section4_price_currency">UAH</p>
        </div>
      </div>

      <Baner>
        <BanerInfo
          title={data[selectedI].title}
          description={data[selectedI].description}
        />
      </Baner>
    </section>
  );
};

export default Section4;
