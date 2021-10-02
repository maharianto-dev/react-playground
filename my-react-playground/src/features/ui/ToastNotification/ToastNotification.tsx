import React, { FC, useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ToastNotification: FC<{ notificationMessage: string }> = ({ notificationMessage }) => {
  const [notificationList, setNotificationList] = useState([] as string[]);

  // const toggleShowA = () => setShowA(!showA);

  const toastPosition = 'top-end';

  useEffect(() => {
    if (notificationMessage != null) {
      setNotificationList((prevState: string[]) => [...prevState, notificationMessage]);
    }
  }, [notificationMessage]);

  const renderToast = notificationList.map((message, index) => (
    <Toast key={index} bg="info" delay={1000} autohide>
      <Toast.Header>
        <img
          src="holder.js/20x20?text=%20"
          className="rounded me-2"
          alt=""
        />
        <strong className="me-auto">Notification</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  ));

  const renderToastContainer = () => {
    if (notificationList.length > 0) {
      return (
        <ToastContainer position={toastPosition}>
          {renderToast}
        </ToastContainer>
      );
    }
    return <></>;
  };

  return (
    <>
      {renderToastContainer()}
    </>
  );
};

export default ToastNotification;
