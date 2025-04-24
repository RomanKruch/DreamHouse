import { useState } from 'react';
import TextInput from '../../common/TextInput/TextInput';
import './RegForm.scss';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import compareClassName from '../../helpers/compareClassName';

interface IProps {
  white?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

const RegForm = ({ white = false, onSubmit, className = '' }: IProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  return (
    <form
      className={compareClassName('regForm', className)}
      onSubmit={onSubmit}
    >
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

      <BtnWithArrow text="discuss a project" white={white} />
    </form>
  );
};

export default RegForm;
