import "./CarCard.css";
import Modal from "react-modal";
import { useState } from "react";
Modal.setAppElement("#root");

function CarCard(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="card-container">
      <div className="img-container">
        <img src={props.carImg} alt="" />
      </div>

      <div className="card-content">
        <div className="card-title">
          <h3> {props.make} </h3>
          <p> Miles: {props.miles} </p>
          <p> Price: £{props.price} </p>
        </div>

        <div className="modalC">
          <button className="modalBtn" onClick={() => setModalIsOpen(true)}>
            View More
          </button>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
          >
            <header className="modalHeader">
              <span className="modalTitle">{props.make} </span>
            </header>

            <div className="modalImg">
              <img src={props.carImg} alt="" />
            </div>
            <p className="modalP"> Miles: {props.miles} </p>
            <p className="modalP"> Location: {props.location} </p>
            <p className="modalP"> Year manufacture: {props.year} </p>
            <div className="modalC">
              <button
                className="modalBtn"
                onClick={() => setModalIsOpen(false)}
              >
                Close
              </button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default CarCard;
