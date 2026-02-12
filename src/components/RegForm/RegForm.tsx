import TextInput from '../../common/TextInput/TextInput';
import './RegForm.scss';
import BtnWithArrow from '../../common/BtnWithArrow/BtnWithArrow';
import compareClassName from '../../helpers/compareClassName';

export interface IFormData {
  name: string;
  phone: string;
}

export interface IValidError {
  field: string;
  message: string;
}

interface IProps {
  white?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  formData: IFormData;
  setFormData: React.Dispatch<React.SetStateAction<IFormData>>;
  loading: boolean,
  validErrors: IValidError[]
}

const RegForm = ({
  white = false,
  onSubmit,
  className = '',
  formData,
  setFormData,
  loading,
  validErrors
}: IProps) => {
  const { name, phone } = formData;
  type FormFields = keyof IFormData;

  const setValue = (field: FormFields) => (value: string) => {
    setFormData(s => ({ ...s, [field]: value }));
  };

  return (
    <form
      className={compareClassName('regForm', className)}
      onSubmit={onSubmit}
    >
      <TextInput
        value={name}
        setValue={setValue('name')}
        placeholder="Your name"
        white={white}
        error={validErrors.find(err => err.field === 'name')?.message}
      />

      <TextInput
        value={phone}
        setValue={setValue('phone')}
        placeholder="Your phone number"
        white={white}
        error={validErrors.find(err => err.field === 'phone')?.message}
      />

      <BtnWithArrow text="discuss a project" white={white} disabled={loading}/>
    </form>
  );
};

export default RegForm;
