import { createPortal } from 'react-dom';
import createClassName from '../../helpers/createClassName';
import './Modal.scss';

const modalRoot = document.getElementById('modal_root') as HTMLElement;

interface IProps {
  children: JSX.Element;
}

const Modal = ({ children }: IProps) => {

  return createPortal(
    <div className={createClassName('modal', 'closing', false)}>
      {children}
    </div>,
    modalRoot,
  );
};

export default Modal;
