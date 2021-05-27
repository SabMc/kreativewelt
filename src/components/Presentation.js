import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root");

const costumStyles = {
  overlay: { backgroundColor: "black", top: "80px" },
  content: {
    backgroundColor: "black",
    border: "none",
    padding: "40px",
    bottom: "20px",
  },
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
        <div className="modal_wrapper">
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            style={costumStyles}
          >
            <div>
              <div className="modal_content">
                <img
                  src={props.src}
                  alt={props.alt}
                  className={props.className}
                  onClick={toggleModal}
                />{" "}
              </div>
              <button onClick={toggleModal}>Close it</button>{" "}
            </div>
          </Modal>
        </div>
      </li>
    </>
  );
}

export default Presentation;
