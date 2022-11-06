import React, { useState } from 'react';
import {Button, Modal} from 'react-bootstrap';
import './style.css';

function ModalNotification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        QUERO RECEBER E-MAILS COM NOVIDADES
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sobre a proteção da LGPD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div align="center"><iframe src="https://docs.google.com/forms/d/e/1FAIpQLSf-aXb0ZDIKvBQlS8to7r13CojBbvD8xhZqsyoEqTYX-vkPXA/viewform?embedded=true" width="360" height="500">Carregando…</iframe></div>        </Modal.Body>
          <div id="blo">
            &nbsp; As informações estão protegidas conforme a LGPD n° 13.709/2018  
          </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalNotification;