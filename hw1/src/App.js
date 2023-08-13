import React, { Component } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal";
import "./App.scss";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      data: {},
    };
  }

  modalData = [
    {
      id: "firstModal",
      header: "First Modal",
      closeButton: true,
      text: "It's the view of first modal",
      actions: (
        <>
          <Button
            backgroundColor="green"
            text="save modal"
            onClick={() => {
              alert("Saved!");
            }}
          />
          <Button
            backgroundColor="red"
            text="delete modal"
            onClick={() => {
              alert("Deleted!");
              this.closeModal();
            }}
          />
        </>
      ),
    },
    {
      id: "secondModal",
      header: "Second Modal",
      closeButton: true,
      text: "It's the view of second modal",
      actions: (
        <>
          <Button
            backgroundColor="green"
            text="save modal"
            onClick={() => {
              alert("Saved!");
            }}
          />
          <Button
            backgroundColor="red"
            text="delete modal"
            onClick={() => {
              alert("Deleted!");
              this.closeModal();
            }}
          />
        </>
      ),
    },
  ];

  openModal = (id) => {
    const modal = this.modalData.filter((modal) => modal.id === id);
    modal && this.setState({ isOpen: true, data: modal[0] });
  };

  closeModal = () => this.setState({ isOpen: false, data: {} });

  render() {
    return (
      <>
        <Button
          backgroundColor="orange"
          text="Open first modal"
          dataModal="firstModal"
          onClick={(e) => this.openModal(e.target.dataset.modal)}
        />
        <Button
          backgroundColor="green"
          text="Open second modal"
          dataModal="secondModal"
          onClick={(e) => this.openModal(e.target.dataset.modal)}
        />

        {this.state.isOpen && (
          <Modal data={this.state.data} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
