import React, { Component } from 'react'
import {FaTimes} from "react-icons/fa"
import "./style.scss"

export default class Modal extends Component {

    modalClicked = (e) => {
        e.stopPropagation();
    }

  render() {
    const {data,closeModal} = this.props
    return (
      <aside className='modal' onClick={closeModal}>
        <dialog open className="modal__container" onClick={this.modalClicked}>
            <header className='modal__header'>
                <h2>{data.header}</h2>
                {data.closeButton && (
                    <FaTimes onClick={closeModal} className='modal__header-btn' />
                )}
            </header>
            <section className='modal__body'>{data.text}</section>
            <footer className='modal__footer'>{data.actions}</footer>
        </dialog>
      </aside>
    )
  }
}
