import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import RegForm from '../../components/RegForm/RegForm';
import ThankYou from '../../components/ThankYou/ThankYou';

interface IProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallModal = ({ isOpen, setIsOpen }: IProps) => {
  if (!isOpen) {
    return <></>;
  }

  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmit(true);
  };

  return (
    <Modal>
      {isSubmit ? <ThankYou setIsOpen={setIsOpen}/> : <RegForm white={true} onSubmit={onSubmit} />}
    </Modal>
  );
};

export default CallModal;
