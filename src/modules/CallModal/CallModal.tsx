import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import RegForm from '../../components/RegForm/RegForm';
import ThankYou from '../../components/ThankYou/ThankYou';
import './CallModal.scss';

const CallModal = () => {
  const [isSubmit, setIsSubmit] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsSubmit(true);
  };

  return (
    <Modal>
      {isSubmit ? (
        <ThankYou />
      ) : (
        <RegForm white={true} onSubmit={onSubmit} className="call_form" />
      )}
    </Modal>
  );
};

export default CallModal;
