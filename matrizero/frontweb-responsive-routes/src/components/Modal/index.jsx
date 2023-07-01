import React, { useState, useEffect } from 'react';
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
  let [ messageEmail, setMessageEmail] = useState(false);
  let [ messagePhone, setMessagePhone] = useState(false);
  let [ messageIsValid, setMessageIsValid] = useState(false);

  let [ messageAgradece, setessageAgradece] = useState(false);

  let [ checkBlockSend, setCheckBlockSend] = useState(true);

  const history = useHistory();

  function handlePhoneNumberChange(event) {
    const rawValue = event.target.value.replace(/\D/g, ''); // Remove todos os caracteres não-numéricos
    let formattedValue = '';

    if (rawValue.length > 0) {
      formattedValue = `(${rawValue.slice(0, 2)})`; // Adiciona os parênteses para o DD

      if (rawValue.length > 2) {
        formattedValue += `${rawValue.slice(2, 7)}-`; // Adiciona o hífen depois do quarto dígito
      }

      if (rawValue.length > 6) {
        formattedValue += rawValue.slice(7, 11); // Adiciona o restante dos dígitos, limitando a 14 caracteres
      }
    }

    setTelefone(formattedValue);
  }
  

function verify(){
        
  if(nome.length < 5){setMessageName(true); setTimeout( () => {setMessageName(false)},10000);}else{console.log("nome maior ou igual a 4", nome.length)}
  if(email.length <8 || !email.includes("@")){setMessageEmail(true); setTimeout( () => {setMessageEmail(false)},10000);}
  if(telefone.length < 11){setMessagePhone(true); setTimeout( () => {setMessagePhone(false)},10000);}
  if(!isValid){setMessageIsValid(true); setTimeout( () => {setMessageIsValid(false)},10000);}


  if(nome.length > 3 && email.length > 9 && email.includes("@") && telefone.length > 13 && isValid){
          console.log("segundo 2")
          setCheckBlockSend(false)
  }else{
          setCheckBlockSend(true)
          let v = document.getElementById("exampleCheck1").value = false
          document.getElementById("exampleCheck1").checked = false
   }

}

  function verifySimples(){

    if(nome.length < 4 || email.length < 10 || telefone.length < 15 || isValid){
      setCheckBlockSend(true)
      document.getElementById("exampleCheck1").checked = false
    }
  }




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

        setessageAgradece(true);

        setTimeout( () => {handleClose()},3000);
  }
  
  function handleNomeChange(event) {
      setNome(event.target.value);
      verifySimples()
  }
  
  function handleEmailChange(event) {
      setEmail(event.target.value);
      verifySimples()
  }

  function handleTelefoneChange(event) {
      
      setTelefone(event.target.value);
      verifySimples()
      handlePhoneNumberChange(event)
  }

  function handleConfirmaChange() {
    
  if(document.getElementById("exampleCheck1").checked==true){
    setConfirma(true);
    verify()
  }else{
    setCheckBlockSend(true)
  }
      
  }

  const [isHuman, setIsHuman] = useState(false);
  const [circles, setCircles] = useState([]);
  const [chances, setChances] = useState(2);
  const [isValid, setIsValid] = useState(false);

  const [next, setNext] = useState()

  useEffect(() => {
    const shuffledCircles = shuffleCircles();
    setCircles(shuffledCircles);
  }, []);

  const shuffleCircles = () => {
    const initialCircles = [...Array(20)].map((_, index) => ({
      id: index,
      isGreen: index === 9,
    }));

    const shuffledCircles = [...initialCircles].sort(() => Math.random() - 0.5);
    return shuffledCircles;
  };

  const handleCircleClick = (id) => {
    if (id === 9) {
      setIsHuman(true);
      setNext(true);
    } else {
      setChances(chances - 1);
    }
  };
 

  const listEmotions = [
    { id: 1, nome: "emotion nerd", valor: "🤓" },
    { id: 2, nome: "emotion surpreso", valor: "😲" },
    { id: 3, nome: "emotion mostrando a lingua", valor: "😝" },
    { id: 4, nome: "no emotion com simples sorriso", valor: "🙂" },
    { id: 5, nome: "no emotion cowboy", valor: "🤠" }
  ];

 
  function SorteiaNome(){
  
    for (let i = listEmotions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [listEmotions[i], listEmotions[j]] = [listEmotions[j], listEmotions[i]];
    }
    
    return listEmotions[2].nome
  }
  

  function verifyEmotion(nome) {
    if(nome == listEmotions[2].nome){  
      setNext(false)
      setIsValid(true)
    }else{
      setChances(chances - 1)
    }
    
  }


  return (
    <>
      <Button variant="secondary" onClick={handleShow} className="custom-button shadow">
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

          <div class="form-group mt-2">
          
          <div>
              {!isValid ? (
                  <>
                  <div>
                  <label for="exampleInputValidadorDeHumano">Validador de Humano</label>
                  </div>
                  <div>
                  <label>Chances restantes: {chances}</label>
                  </div>
                  </>
              ) : (
                <div>
                  <label>Etapa Verificada!</label>
                  </div>
              ) }
              
              {!isHuman && chances > 0 ? (
                <div>
                  <div>
                    <label>Clique no círculo verde escuro:</label>
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: '10px',
                      width: '300px',
                      margin: '0 auto',
                    }}
                  >
                    {circles.map((circle) => (
                      <div
                        key={circle.id}
                        style={{
                          width: circle.isGreen ? '20px' : '20px',
                          height: circle.isGreen ? '20px' : '20px',
                          borderRadius: '50%',
                          backgroundColor: circle.isGreen ? 'green' : 'MediumSeaGreen',
                          cursor: 'pointer',
                        }}
                        onClick={() => handleCircleClick(circle.id)}
                      ></div>
                    ))}
                  </div>
                  
                </div>
              ) : (
                <>
                <label>{chances === 0 && 'Verificação falhou. Tente novamente.'}</label>
                <label>{next && !isValid && chances > 0 && 'Clique no ' + SorteiaNome()}</label>
                
                </>
              )}
            </div>

            <div className="d-flex justify-content-between">
          {chances > 0 && next && listEmotions.map((emotion) => (
            <div key={emotion.id}>
              <p onClick={() => verifyEmotion(emotion.nome)}>{emotion.valor}</p> </div>
          ))
          
          
          
          }
        </div>


        </div>


          <div class="form-check mt-2">
            <input value={confirma} type="checkbox" onChange={handleConfirmaChange} class="form-check-input" id="exampleCheck1" required/>
            <label class="form-check-label" for="exampleCheck1">As informações estão protegidas conforme a LGPD n° 13.709/2018  </label>
          </div>
          
            <button type="submit" class="btn btn-primary mt-2 my-effect w-100" disabled={checkBlockSend}>Enviar</button>
            {
                            messageName && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">O Nome Completo está muito curto</div>
            }
            {
                            messageEmail && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Verifique o e-mail</div>
            }
            {
                            messagePhone && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Verifique o número de telefone</div>
            }
            {
                            messageIsValid && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">A validação se é humano precisa ser concluida</div>
            }

            {
                            messageAgradece && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Agradecemos !!!</div>
            }
            <small>Preencha os Campos de forma adquada para habilitar o botao Enviar</small>
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