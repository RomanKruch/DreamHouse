interface IProps {
  value: number;
  max: number;
  id?: string;
}

const CircleProgressBar = ({ value, max, id = '' }: IProps) => {
  const radius = 117.5;
  const fullLength = radius * Math.PI * 2;

  const valuePercent = value / max;
  const length = fullLength - fullLength * valuePercent;

  return (
    <svg width={235} height={235} viewBox="0 0 235 235">
      <circle
        cx={radius}
        cy={radius}
        strokeWidth="2px"
        r={radius}
        fill="none"
        stroke="rgba(255, 255, 255, 0.4)"
        id={id}
      />
      <circle
        cx={radius}
        cy={radius}
        strokeWidth="2px"
        r={radius}
        fill="none"
        stroke="#FFAC30"
        style={{
          strokeDasharray: fullLength,
          strokeDashoffset: length,
          strokeLinecap: 'square',
        }}
        transform={`rotate(-90 ${radius} ${radius})`}
      />
    </svg>
  );
};

export default CircleProgressBar;
