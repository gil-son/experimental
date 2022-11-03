import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Novidades por e-mail
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sobre a proteção da LGPD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-aXb0ZDIKvBQlS8to7r13CojBbvD8xhZqsyoEqTYX-vkPXA/viewform?embedded=true" width="500" height="600">Carregando…</iframe>        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;