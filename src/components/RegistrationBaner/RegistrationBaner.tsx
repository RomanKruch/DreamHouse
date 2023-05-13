import './RegistrationBaner.scss';
import TextInput from '../TextInput/TextInput';
import { useState } from 'react';
import ArrowIcon from '../ArrowIcon/ArrowIcon';

const RegistrationBaner = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(`Name ${name} Phone ${phone}`);
  };

  return (
    <form className="registrationBaner" onSubmit={onSubmit}>
      <TextInput value={name} setValue={setName} placeholder="Your name" />

      <TextInput
        value={phone}
        setValue={setPhone}
        placeholder="Your phone number"
      />

      <button type="submit" className="registrationBaner_btn">
        discuss a project
        <ArrowIcon />
      </button>
    </form>
  );
};

export default RegistrationBaner;
