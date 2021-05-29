import React, { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

import "./Gallery.css";

Modal.setAppElement("#root");

const costumStyles = {
  overlay: { backgroundColor: "black", top: "80px" },
  content: {
    backgroundColor: "black",
    border: "none",
    padding: "40px",
    bottom: "20px",
    height: "90%",
    textAlign: "center",
  },
};

const imgStyles = {
  maxHeight: "500px",
  width: "auto",
};

function Presentation(props) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <li className="presentation_item">
        <div className="presentation_item_pic_wrap">
          <img
            src={props.src}
            alt={props.alt}
            className="presentation_item_img"
            onClick={toggleModal}
          />{" "}
        </div>
        <div className="presentation_item_info">
          <h5 className="presentation_item_text">
            {props.details} <br /> {props.size}
          </h5>
        </div>
        <div>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={costumStyles}
          >
            <div className="modal_icon">
              <FaTimes
                onClick={toggleModal}
                style={{ color: "white", float: "left" }}
              />
            </div>
            <div className="modal_img">
              <img
                src={props.src}
                alt={props.alt}
                onClick={toggleModal}
                style={imgStyles}
              />
            </div>
          </Modal>
        </div>
      </li>
    </>
  );
}

export default Presentation;
