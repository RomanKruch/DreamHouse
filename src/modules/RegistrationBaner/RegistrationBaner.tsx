import axios from 'axios';
import { useEffect, useState } from 'react';
import Baner from '../../components/Baner/Baner';
import RegForm, {
  IFormData,
  IValidError,
} from '../../components/RegForm/RegForm';
import './RegistrationBaner.scss';

interface IProps {
  className?: string;
}

const initialFormData = {
  name: '',
  phone: '',
};

const RegistrationBaner = ({ className = '' }: IProps) => {
  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [isSubmit, setIsSubmit] = useState(false);
  const [validErrors, setValidErrors] = useState<IValidError[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setValidErrors([]);
  }, [formData]);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);
    try {
      await axios.post('http://localhost:3000/requests', formData);
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
    <Baner className={className}>
      {isSubmit ? (
        <div>
          <p className="registrationBaner_subtitle">
            Your request has landed safely in our demo inbox 📬
          </p>
          <p className="registrationBaner_subtitle">
            Since this is a portfolio project, no real manager will contact you
            — but your submission was a success! 🎉
          </p>
        </div>
      ) : (
        <RegForm
          formData={formData}
          loading={loading}
          setFormData={setFormData}
          validErrors={validErrors}
          onSubmit={onSubmit}
        />
      )}
    </Baner>
  );
};

export default RegistrationBaner;
