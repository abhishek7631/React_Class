import React from "react";
import { Modal, Button } from "react-bootstrap";

const MapModal = ({ show, onHide }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Cat Selling Shop Map</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609913735!2d72.74109708460838!3d19.08252230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c63c477277%3A0x220c11d3f2b6a8e1!2sCat%20Cafe%20Studio!5e0!3m2!1sen!2sin!4v1605349620273!5m2!1sen!2sin"
          width="100%"
          height="450"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          title="Cat Selling Shop"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MapModal;
