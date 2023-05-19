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
        className={`textInput_inp ${white && 'textInput_inp-white'}`}
        type="text"
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
      />
      <label
        className={`textInput_label ${white && 'textInput_label-white'}`}
        htmlFor={id}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default TextInput;
