import PropTypes from "prop-types";
import React, { Component } from "react";
import { FaTimes } from "react-icons/fa";

class Modal extends Component {
  modalClicked = (e) => {
    e.stopPropagation();
  };

  render() {
    const { header, closeButton, text, actions, onClose } = this.props;
    return (
      <aside className="modal" onClick={onClose}>
        <dialog open className="modal__container" onClick={this.modalClicked}>
          <header className="modal__header">
            <h2>{header}</h2>
            {closeButton && (
              <FaTimes onClick={onClose} className="modal__header-btn" />
            )}
          </header>
          <section className="modal__body">{text}</section>
          <footer className="modal__footer">{actions}</footer>
        </dialog>
      </aside>
    );
  }
}

Modal.propTypes = {
  header: PropTypes.string,
  closeButton: PropTypes.bool,
  text: PropTypes.string,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  header: "modal",
  closeButton: true,
  text: "default text",
};

export default Modal;
