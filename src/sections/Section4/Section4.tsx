import { useState } from 'react';
import CircleProgressBar from '../../common/CircleProgressBar/CircleProgressBar';
import './Section4.scss';
import createActiveClass from '../../helpers/createActiveClassName';
import Baner from '../../components/Baner/Baner';
import BanerInfo from '../../components/BanerInfo/BanerInfo';

type TSelectedI = 0 | 1 | 2;

const items = [
  {
    id: 0,
    title: 'Elite',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    id: 1,
    title: 'Vip',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
  {
    id: 2,
    title: 'Extra',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu.',
  },
];

const Section4 = () => {
  const [value, setValue] = useState(30);
  const [selectedI, setSelectedI] = useState<TSelectedI>(0);
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
              <h3 className="section4_select_title">Elite</h3>
              <h3 className="section4_select_title">VIP</h3>
              <h3 className="section4_select_title">Extra</h3>
            </div>
            <div className="section4_select_btn_wrap">
              <div
                className={createActiveClass('section4_select_line', true)}
              ></div>
              <button
                type="button"
                className={createActiveClass(
                  'section4_select_btn',
                  selectedI === 0,
                )}
                onClick={() => setSelectedI(0)}
              ></button>
              <div
                className={createActiveClass(
                  'section4_select_line',
                  selectedI >= 1,
                )}
              ></div>
              <button
                type="button"
                className={createActiveClass(
                  'section4_select_btn',
                  selectedI === 1,
                )}
                onClick={() => setSelectedI(1)}
              ></button>
              <div
                className={createActiveClass(
                  'section4_select_line',
                  selectedI >= 2,
                )}
              ></div>
              <button
                type="button"
                className={createActiveClass(
                  'section4_select_btn',
                  selectedI === 2,
                )}
                onClick={() => setSelectedI(2)}
              ></button>
              <div
                className={createActiveClass(
                  'section4_select_line',
                  selectedI >= 2,
                )}
              ></div>
              <div
                className={createActiveClass(
                  'section4_select_arrow',
                  selectedI >= 2,
                )}
              ></div>
            </div>
          </div>
          <p className="section4_price_numbers">
            {value * (selectedI + 1) * 435}
          </p>
          <p className="section4_price_currency">UAH</p>
        </div>
      </div>

      <Baner>
        <BanerInfo
          title={items[selectedI].title}
          description={items[selectedI].description}
        />
      </Baner>
    </section>
  );
};

export default Section4;
