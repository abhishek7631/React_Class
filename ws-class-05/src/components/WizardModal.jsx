import React, { useState } from "react";
import { Modal, Tab, Tabs, Button } from "react-bootstrap";

const WizardModal = ({ show, onHide }) => {
  const [key, setKey] = useState("tab1");

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Wizard Design</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
          <Tab
            eventKey="tab1"
            title="Tab 1"
            className={key === "tab1" ? "active-tab" : ""}
          >
            <p>This is content for Tab 1.</p>
          </Tab>
          <Tab
            eventKey="tab2"
            title="Tab 2"
            className={key === "tab2" ? "active-tab" : ""}
          >
            <p>This is content for Tab 2.</p>
          </Tab>
          <Tab
            eventKey="tab3"
            title="Tab 3"
            className={key === "tab3" ? "active-tab" : ""}
          >
            <p>This is content for Tab 3.</p>
            <form>
              <label>
                Input Text:
                <input type="text" />
              </label>
            </form>
          </Tab>
          <Tab
            eventKey="tab4"
            title="Tab 4"
            className={key === "tab4" ? "active-tab" : ""}
          >
            <p>This is content for Tab 4.</p>
            <video controls width="100%">
              <source src="your-video-url.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Tab>
        </Tabs>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default WizardModal;
