import CircleProgressBar from '../../common/CircleProgressBar/CircleProgressBar';
import './Range.scss';
import { useState, useEffect } from 'react';

const body = document.querySelector('body')

interface IProps {
  max: number;
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

const Range = ({ max, value, setValue }: IProps) => {
  const valueInDeg = (1 / max) * 360;
  const [centerCords, setCenterCords] = useState<[number, number]>([0,0])
  const id = 'progress1';

  // const isTouch = window.innerWidth < 1024;

  useEffect(() => {
    const circleRef = document.getElementById(id) as Element;
    const circleRect = circleRef.getBoundingClientRect();

    const centerX = circleRect.x + 117.5;
    const centerY = circleRect.y + window.scrollY + 117.5;

    setCenterCords([centerX, centerY])
  }, []);

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

  const onMouseMove = (e: MouseEvent) => {
    const width = e.pageX - centerCords[0];
    const height = e.pageY - centerCords[1];

    let deg = Math.atan(Math.abs(height) / Math.abs(width)) * 57.295779;

    if (height < 0 && width > 0) {
      deg = 90 - deg;
    } else if (height > 0 && width > 0) {
      deg += 90;
    } else if (width < 0 && height > 0) {
      deg = 180 - deg + 90;
    } else if (width < 0 && height < 0) {
      deg += 270;
    }

    if (deg >= 360) {
        deg = 360;
    }

    setValue(Math.round(deg / valueInDeg));
  };

  const onMouseUp = () => {
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
  };

  const onRange = () => {
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  };

  const onTouchMove = (e: TouchEvent) => {
    const [touch] = e.changedTouches

    const width = touch.pageX - centerCords[0];
    const height = touch.pageY - centerCords[1];

    let deg = Math.atan(Math.abs(height) / Math.abs(width)) * 57.295779;

    if (height < 0 && width > 0) {
      deg = 90 - deg;
    } else if (height > 0 && width > 0) {
      deg += 90;
    } else if (width < 0 && height > 0) {
      deg = 180 - deg + 90;
    } else if (width < 0 && height < 0) {
      deg += 270;
    }

    if (deg >= 360) {
        deg = 360;
    }

    setValue(Math.round(deg / valueInDeg));
  };

  const onTouchUp = () => {
    window.removeEventListener('touchmove', onTouchMove);
    body?.classList.remove('noScroll');
    window.removeEventListener('touchend', onTouchUp);
  };

  const onRangeTouch = () => {
    body?.classList.add('noScroll');
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchUp);
  }

  return (
    <div className="range">
      <p className="range_title">m²</p>
      <div className="range_wrap">
        <CircleProgressBar value={value} max={max} id={id} />
        <input
          type="text"
          className="range_inp"
          value={value + ''}
          onChange={onChange}
        />
        <div
          className="range_btn_wrap"
          style={{ rotate: `${value * valueInDeg}deg` }}
        >
          <button className="range_btn" onMouseDown={onRange} onTouchStart={onRangeTouch}></button>
        </div>
      </div>
    </div>
  );
};

export default Range;
