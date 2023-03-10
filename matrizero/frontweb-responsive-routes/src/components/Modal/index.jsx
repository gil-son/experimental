import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {Button, Modal} from 'react-bootstrap';
import './style.css';

function ModalNotification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [confirma, setConfirma] = useState(false);

  let [ messageName, setMessageName] = useState(false);

  let [ checkSend, setCheckSend] = useState(true);

  const history = useHistory();
  
function handleSubmit(event) {
      event.preventDefault();
  
      // Enviar dados para o SheetDB API usando fetch
      const url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw';
      const data = { nome, email, telefone, confirma };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(() => {
          // Se o envio dos dados for bem-sucedido, redirecionar o usuário para outra página
          history.push('/');
        })
        .catch(error => {
          console.error(error);
        });

        setMessageName(true);

        setTimeout( () => {handleClose()},3000);
  }
  
  function handleNomeChange(event) {
      setNome(event.target.value);
  }
  
  function handleEmailChange(event) {
      setEmail(event.target.value);
  }

  function handleTelefoneChange(event) {
      setTelefone(event.target.value);
  }

  function handleConfirmaChange() {
      setConfirma(true);
  }

  return (
    <>
      <Button variant="secondary" onClick={handleShow}>
        QUERO RECEBER E-MAILS COM NOVIDADES
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Sobre a proteção da LGPD</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={handleSubmit}>
          
          <div class="form-group">
            <label for="exampleInputNome1">Nome Completo</label>
            <input value={nome} onChange={handleNomeChange} type="nome" class="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="O seu nome completo"/>
          </div>

          <div class="form-group mt-2">
            <label for="exampleInputEmail1">E-mail</label>
            <input value={email} type="email" onChange={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="O seu melhor e-mail"/>
          </div>
          
          
          <div class="form-group mt-2">
            <label for="exampleInputTelefone1">Celular</label>
            <input value={telefone} type="telefone" onChange={handleTelefoneChange} class="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder="O seu celular com DDD"/>
          </div>

          <div class="form-check mt-2">
            <input value={confirma} type="checkbox" onChange={handleConfirmaChange} class="form-check-input" id="exampleCheck1" required/>
            <label class="form-check-label" for="exampleCheck1">As informações estão protegidas conforme a LGPD n° 13.709/2018  </label>
          </div>
            <button type="submit" class="btn btn-primary mt-2 my-effect w-100" disabled={checkSend} >Enviar</button>
            {
                            messageName && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Agradecemos !!!</div>
            }
        </form>
        </Modal.Body>
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