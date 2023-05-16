import { useState } from 'react';
import CircleProgressBar from '../CircleProgressBar/CircleProgressBar';
import './Section5.scss';
import createActiveClass from '../../helpers/createClassName';
import icon1 from '../../assets/section-5/icon-1.png';
import icon2 from '../../assets/section-5/icon-2.png';
import icon3 from '../../assets/section-5/icon-3.png';
import icon4 from '../../assets/section-5/icon-4.png';
import icon5 from '../../assets/section-5/icon-5.png';
import icon6 from '../../assets/section-5/icon-6.png';
import RegistrationBaner from '../RegistrationBaner/RegistrationBaner';

const steps = [
  {
    img: icon1,
    title: 'LEAVE AN APPLICATION',
    description: 'LEAVE AN APPLICATION BY PHONE OR ON OUR WEBSITE',
  },
  {
    img: icon2,
    title: 'CHECK OUT OF THE MEASURER',
    description:
      'OUR SPECIALIST COMES TO YOU AT THE OBJECT FOR MEASURING AND PHOTO FIXING',
  },
  {
    img: icon3,
    title: 'DRAFTING AN ESTIMATE',
    description:
      'DEVELOPMENT OF TERMS OF REFERENCE, 3D VISUALIZATION AND CALCULATION OF THE ESTIMATE',
  },
  {
    img: icon4,
    title: 'SIGNING THE CONTRACT',
    description:
      'AGREEMENT OF THE COST AND DATE OF COMPLETION OF WORKS, SIGNING OF THE CONTRACT',
  },
  {
    img: icon5,
    title: 'BEGINNING OF WORK',
    description:
      'START OF REPAIR WORKS UNDER THE SUPERVISION OF A PERSONAL SUPERVISOR',
  },
  {
    img: icon6,
    title: 'COMPLETION',
    description: 'COMPLETION OF REPAIRS, REMOVAL OF CONSTRUCTION rubbish',
  },
];

const Section5 = () => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = steps[activeStepIndex];

  return (
    <section className="section5" id="5">
      <div className="container">
        <h2 className="section5_title">6 steps to your dream house:</h2>
        <div className="section5_wrap">
          <div className="section5_control">
            <p className="section5_control_value">{activeStepIndex + 1}</p>
            <CircleProgressBar max={steps.length} value={activeStepIndex} />
            {steps.map((v, i) => (
              <div
                key={v.title}
                className="section5_control_btn_wrap"
                style={{ transform: `rotate(${i * 60}deg)` }}
              >
                <button
                  className={createActiveClass(
                    'section5_control_btn',
                    activeStepIndex === i,
                  )}
                  onClick={() => setActiveStepIndex(i)}
                ></button>
              </div>
            ))}
          </div>

          <div className="section5_details">
            <img src={activeStep.img} alt="Step icon" />
            <h3 className="section5_details_title">{activeStep.title}</h3>
            <div className="section5_details_arrow"></div>
            <p className="section5_details_description">
              {activeStep.description}
            </p>
          </div>
        </div>
      </div>
      <RegistrationBaner />
    </section>
  );
};

export default Section5;
