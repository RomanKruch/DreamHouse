import './Modal.scss';

interface IProps {
  children: JSX.Element;
}

const Modal = ({ children }: IProps) => {
  return <div className='modal'>{children}</div>;
};

export default Modal;
