import { useState } from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';
import TextInput from '../TextInput/TextInput';
import './RegForm.scss';

interface IProps {
  white?: boolean;
}

const RegForm = ({ white = false }: IProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`Name ${name} Phone ${phone}`);
  };

  return (
    <form className="regForm" onSubmit={onSubmit}>
      <TextInput
        value={name}
        setValue={setName}
        placeholder="Your name"
        white={white}
      />

      <TextInput
        value={phone}
        setValue={setPhone}
        placeholder="Your phone number"
        white={white}
      />

      <button type="submit" className="regForm_btn">
        discuss a project
        <ArrowIcon />
      </button>
    </form>
  );
};

export default RegForm;
