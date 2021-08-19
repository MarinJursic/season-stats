import React from "react";
import { useContext } from "react";
import { SearchContext } from "../../App";
import "./Modal.scss";

function Modal() {
  const { modal, setModal } = useContext(SearchContext);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      {modal && (
        <div className="modal">
          <div className="overlayed" onClick={toggleModal}></div>
          <div className="modal-content">
            <h2>There was an error</h2>
            <p>Sorry, we couldn't find a player by that name.</p>
            <button className="close-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
