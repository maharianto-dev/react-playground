import React, { useState } from 'react';
import { Button, Toast } from 'react-bootstrap';

const ToastNotification = () => {
  const [showA, setShowA] = useState(false);

  const toggleShowA = () => setShowA(!showA);

  const buttonText = (
    <>
      Toggle Toast&nbsp;
      <strong>with</strong>
      &nbsp;Animation
    </>
  );

  return (
    <>
      <Button onClick={toggleShowA} className="btn btn-primary mb-2">
        {buttonText}
      </Button>
      <Toast show={showA} onClose={toggleShowA}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you&apos;re reading this text in a Toast!</Toast.Body>
      </Toast>
    </>
  );
};

export default ToastNotification;
