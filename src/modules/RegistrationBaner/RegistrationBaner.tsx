import Baner from '../../components/Baner/Baner';
import RegForm from '../../components/RegForm/RegForm';

interface IProps {
  className?: string;
}

const RegistrationBaner = ({ className = '' }: IProps) => {
  return (
    <Baner className={className}>
      <RegForm />
    </Baner>
  );
};

export default RegistrationBaner;
