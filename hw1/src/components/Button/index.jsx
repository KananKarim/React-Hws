import React, { Component } from "react";
import "./style.scss";

export default class Button extends Component {
  render() {
    const { backgroundColor, text, onClick, dataModal } = this.props;

    return (
      <button
        style={{ backgroundColor: backgroundColor }}
        data-modal={dataModal}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }
}
