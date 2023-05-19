import createClassName from '../../helpers/createClassName';
import './TextInput.scss';
import { v4 as uuid } from 'uuid';

interface IProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  white?: boolean;
}

const TextInput = ({ placeholder, value, setValue, white = false }: IProps) => {
  const id = uuid();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="textInput">
      <input
        className={createClassName('textInput_inp', 'white', white)}
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={createClassName('textInput_label', 'white', white)}
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
