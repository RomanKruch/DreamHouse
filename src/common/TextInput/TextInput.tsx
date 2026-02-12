import createClassName from '../../helpers/createClassName';
import './TextInput.scss';
import { v4 as uuid } from 'uuid';

interface IProps {
  placeholder: string;
  value: string;
  setValue: (value: string) => void;
  white?: boolean;
  error?: string;
}

const TextInput = ({
  placeholder,
  value,
  setValue,
  white = false,
  error = '',
}: IProps) => {
  const id = uuid();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className={createClassName('textInput', 'error', error)}>
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
      {error && <p className='textInput_error'>{error}</p>}
    </div>
  );
};

export default TextInput;
