import { useState } from 'react';
import Modal from '../../common/Modal/Modal';
import RegForm, { IValidError } from '../../components/RegForm/RegForm';
import ThankYou from '../../components/ThankYou/ThankYou';
import { IFormData } from '../../components/RegForm/RegForm';
import './CallModal.scss';
import axios from 'axios';

const initialFormData = {
  name: '',
  phone: '',
};

const CallModal = () => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [validErrors, setValidErrors] = useState<IValidError[]>([]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      await axios.post(
        'http://localhost:3000/requests',
        formData,
      );
      setValidErrors([]);
      setIsSubmit(true);
    } catch (error: any) {
      const data = error.response?.data;
      if (data?.statusCode === 400) {
        setValidErrors(data.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal>
      {isSubmit ? (
        <ThankYou />
      ) : (
        <RegForm
          white={true}
          onSubmit={onSubmit}
          className="call_form"
          formData={formData}
          setFormData={setFormData}
          loading={loading}
          validErrors={validErrors}
        />
      )}
    </Modal>
  );
};

export default CallModal;
