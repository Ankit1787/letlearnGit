import { IoMdClose } from "react-icons/io";
import "./Modal.css";

const Modal = ({ children, handleClose, className ,modalRef,modalClasses}) => {
  return (
    <>
      <div className={`modal ${modalClasses}`}>
        <div ref={modalRef} className={` modal-box p-6 ${className}`}>
          <button
            onClick={handleClose}
            className="absolute shadow-md top-[-40px] right-[-20px] bg-white rounded-full p-3 z-[999]"
          >
            <IoMdClose />
          </button>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
