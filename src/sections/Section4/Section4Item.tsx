import createActiveClass from '../../helpers/createActiveClassName';

interface IProps {
  selectedI: number;
  i: number;
  setSelectedI: (v: number) => void;
}

const Section4Item = ({ i, selectedI, setSelectedI }: IProps) => {
  return (
    <>
      <button
        type="button"
        className={createActiveClass('section4_select_btn', selectedI === i)}
        onClick={() => setSelectedI(i)}
      ></button>
      <div
        className={createActiveClass(
          'section4_select_line',
          selectedI >= i,
        )}
      ></div>
    </>
  );
};

export default Section4Item;
