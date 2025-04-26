import { useState } from 'react';
import CircleProgressBar from '../../common/CircleProgressBar/CircleProgressBar';
import './Section5.scss';
import createActiveClass from '../../helpers/createActiveClassName';
import steps from '../../data/section5';
import RegistrationBaner from '../../modules/RegistrationBaner/RegistrationBaner';

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
      <RegistrationBaner className='section5_baner'/>
    </section>
  );
};

export default Section5;
