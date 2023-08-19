import PropTypes from "prop-types";
import "./modal.scss";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ closeButton, modalData, actions, onClose }) => {
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };


  return (
    <div className="modal-overlay" onClick={onClose}>
  <section className="modal" onClick={handleModalContentClick}>
    <article className="modal-content">
      <header className="modal-header">
        <h3 className="modal-title">{modalData.header}</h3>
        {closeButton ? (
          <span className="close-btn" onClick={onClose}>
            <AiOutlineClose />
          </span>
        ) : (
          ""
        )}
      </header>
      <main className="modal-body">
        <p>{modalData.text}</p>
      </main>
      <footer className="modal-footer">{actions}</footer>
    </article>
  </section>
</div>

  );
};

Modal.propTypes = {
  closeButton: PropTypes.bool,
  onClose: PropTypes.func,
  modalData: PropTypes.object
};

Modal.defaultProps = {
  closeButton: true,
  modalData: {}
};
export default Modal;
