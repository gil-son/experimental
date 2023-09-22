import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { CarouselCourses } from '../Carousel';
import { ReviewsPagination } from '../Pagination';
import { BasicCard, CourseUdemyEduzzHotmartCard } from 'components/Card';
import Accordion from '../Accordion';
import { YouTubeVideo, Canvas } from '../Video';
import { ButtonCourses } from 'components/ButtonIcon';
import './style.css';


export const ModalCourses = ({...props}) => {

  let dispatch = useDispatch();

  let state = useSelector( state => state);
  var theverify =  JSON.stringify(state);
  const obj = JSON.parse(theverify)

  const [show, setShow] = useState(false);
  let [ language, setLanguage] = useState(obj.mylanguage.language);
  
  let [image, setImage] = useState(props.content);

  useEffect(() => {
    setLanguage(!language)
  },[obj.mylanguage.language]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log("props:", props);
  console.log("a:",image);
  

  return(<>
    <Button variant="secondary" onClick={handleShow} className="custom-button shadow mb-2">
        
        {language ? (<>ESPECIALIZAÇÃO</>) : (<>SPECIALIZATION</>)}

      </Button>

      <Modal show={show} fullscreen={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{language ? (<>ESPECIALIZAÇÃO EM APACHE {props.content}</>) : (<>APACHE {props.content} SPECIALIZATION</>)} </Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: 'linear-gradient(to right, #050227, #77a4fe, #adcdfd, #77a4fe, #050227)' }}>
      
            <section class="container" style={{ background: 'white' }}>
              <div className="row">
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 box1 xxx">
                   
                <CarouselCourses imagez={image}/>

                </div>
                <div class="col-12 col-sm-12 col-md-12 col-lg-6 box2 xxx">
                  {/*<CourseUdemyEduzzHotmartCard coursename={props.image} />*/}
                  <div className="row">
                    <div className="row">
                        <div className="col-12 shadow  d-flex justify-content-center">
                          {/*<YouTubeVideo videoId={"a92nvopMzgI"}/>*/}
                          <Canvas />
                        </div>
                    </div>
                    <div className="row">
                      <div className="col-12  shadow">
                      <h3 className='sub-titles'>Escolha a plataforma</h3>
                        <ButtonCourses />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
              <div className="row">
                <div className="col border xxx">
                  <ReviewsPagination />
                </div>
              </div>


              <div className="row">
                <div class="col-12 col-sm-12 col-md-6 box1 xxx">
                  <h3>Perguntas Comuns</h3>
                  <Accordion />

                </div>
                <div class="col-12 col-sm-12 col-md-6 box2 xxx">
                    <div className="row">
                        <div className="col">
                              <BasicCard />
                        </div>
                     </div>
                </div>
              </div>

              <div className="row only-mobile">
                <div class="col-12 col-sm-12 col-md-4 box2 xxx">
                  <div className="row">
                   <div class="col-12 col-sm-12 col-md-4 box2 xxx">
                      <h3>Escolha a plataforma</h3>
                      <ButtonCourses />
                   </div>
                  </div>
                </div>
              </div>
            </section>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" >
                
            </Button>
        </Modal.Footer>    
      </Modal>
  </>);
}


export const ModalCoursesFree = (props) => {

  let dispatch = useDispatch();

  let state = useSelector( state => state);
  var theverify =  JSON.stringify(state);
  const obj = JSON.parse(theverify)

  const [show, setShow] = useState(false);
  let [ language, setLanguage] = useState(obj.mylanguage.language);

  useEffect(() => {
    setLanguage(!language)
  },[obj.mylanguage.language]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return(<>
    <Button variant="secondary" onClick={handleShow} className="custom-button-free shadow mb-2">
        
        {language ? (<>FUNDAMENTOS</>) : (<>FUNDATIONS</>)}

      </Button>

      <Modal show={show} fullscreen={true} onHide={handleClose} className="custom-modal" >
        <Modal.Header closeButton>
          <Modal.Title>{language ? (<>FUNDAMENTOS EM APACHE CAMEL</>) : (<>APACHE CAMEL FUNDATIONS</>)} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           a? {props.content}
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" >
                
            </Button>
        </Modal.Footer>    
      </Modal>
  </>);
}


export const ModalNotification = () => {

  let dispatch = useDispatch();

  let state = useSelector( state => state);
  var theverify =  JSON.stringify(state);
  const obj = JSON.parse(theverify)

  let [ language, setLanguage] = useState(obj.mylanguage.language);



  const isSessionBlockedRef = useRef(0);
  let [rest, setRest] = useState(0);

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
        
  if(nome.length < 5){setMessageName(true); setTimeout( () => {setMessageName(false)},10000);}else{}
  if(email.length <8 || !email.includes("@")){setMessageEmail(true); setTimeout( () => {setMessageEmail(false)},10000);}
  if(telefone.length < 11){setMessagePhone(true); setTimeout( () => {setMessagePhone(false)},10000);}
  if(!isValid){setMessageIsValid(true); setTimeout( () => {setMessageIsValid(false)},10000);}


  if(nome.length > 3 && email.length > 9 && email.includes("@") && telefone.length > 13 && isValid){
          //console.log("segundo 2")
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
      rest = Number(localStorage.getItem('duration-event')) - Date.now()
      //console.log("rest:", rest)
      //console.log("Agora:", Date.now())
      //console.log("Duracao:", Number(localStorage.getItem('duration-event'))) 


      event.preventDefault();

      if(rest>0){
        //console.log("rest of session: ", rest)
        
      }else{
          isSessionBlockedRef.current = false
          //console.log("desblocked, passed: ", rest)
          localStorage.removeItem('duration-event')
          event.preventDefault();

      // Enviar dados para o SheetDB API usando fetch

      let url = '';

        if(new Date().getDay()===0){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===1){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===2){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===3){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===4){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===5){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
        if(new Date().getDay()===6){url = 'https://sheetdb.io/api/v1/li2m6i21d3vnw'}
      
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

  useEffect(() => {
    setLanguage(!language)
  },[obj.mylanguage.language]);

  function verifySession(){
   
    //console.log("Agora:", Date.now())
    //console.log("Duracao:", Number(localStorage.getItem('duration-event')))
    //console.log(Number(localStorage.getItem('duration-event')) - Date.now())
    if(Number(localStorage.getItem('duration-event')) - Date.now() >0){
      
      }else{
        localStorage.removeItem('duration-event')
        //console.log("rest of session: ", rest)
        //setIsSessionBlocked(false);
        isSessionBlockedRef.current = false;
    }
  }

  useEffect(() => {
    if(chances === 0){
      isSessionBlockedRef.current = true
      localStorage.setItem('time-event', Date.now());
      localStorage.setItem('duration-event', Date.now() + 5 * 60 * 1000);
    }
  }, [chances]);

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
    { id: 1, nome: "nerd", valor: "🤓" },
    { id: 2, nome: "chocolate", valor: "🍫" },
    { id: 3, nome: "sushi", valor: "🍱" },
    { id: 4, nome: "hamburguer", valor: "🍔" },
    { id: 5, nome: "cowboy", valor: "🤠" }
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
        
        {language ? (<>QUERO RECEBER E-MAILS COM NOVIDADES</>) : (<>I WANT TO RECEIVE E-MAILS WITH NEWS</>)}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{language ? (<>Sobre a proteção da LGPD</>) : (<>Protection under the GDPL</>)} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <form onSubmit={handleSubmit} onLoad={verifySession()}>
          
          <div className="form-group">
          <label for="exampleInputNome1">{language ? ("Nome Completo") : ("Complete Name")}</label>
            <input value={nome} onChange={handleNomeChange} type="nome" className="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder={language ? ("O seu nome completo") : ("Your complete name")}/>
          </div>

          <div className="form-group mt-2">
            <label for="exampleInputEmail1">{language ? ("E-mail") : ("Email")}</label>
            <input value={email} type="email" onChange={handleEmailChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={language ? ("O seu melhor e-mail") : ("Your best e-mail")}/>
          </div>
          
          
          <div className="form-group mt-2">
            <label for="exampleInputTelefone1">{language ? ("Celular") : ("Cellphone")}</label>
            <input value={telefone} type="telefone" onChange={handleTelefoneChange} className="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder={language ? ("O seu celular com DDD") : ("Your cellphone with area code")}/>
          </div>

          <div className="form-group mt-2">
          
          {localStorage.getItem('duration-event') == null ? (
          <div>
              {!isValid ? (
                  <>
                  <div>
                  <label for="exampleInputValidadorDeHumano">{language ? (<>Validador de Humano</>) : (<>Human Validator</>)}</label>
                  </div>
                  <div>
                  <label>{language ? (<>Chances restantes:</>) : (<>Remaining Chances:</>)} {chances}</label>
                  </div>
                  </>
              ) : (
                <div>
                  <label>{language ? (<>Etapa Verificada!</>) : (<>Step Verified!</>)}</label>
                  </div>
              ) }
              
              {!isHuman && chances > 0 ? (
                <div>
                  <div>
                  <label>{language ? (<>Clique no círculo verde escuro:</>) : (<>Click the dark green circle:</>)}</label>
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
                <label>
                  {language ? (
                    
                    chances === 0 && 'Verificação falhou. Tente novamente.'
                  
                  ) : (
                  
                    chances === 0 && 'Verification failed. Try again.'
                  
                  )}
                </label>


                <label>
                  {language ? (
                    
                    next && !isValid && chances > 0 && 'Clique no ' + SorteiaNome()
                  
                  ) : (
                  
                    next && !isValid && chances > 0 && 'Click on the ' + SorteiaNome()
                  
                  )}
                  
                  </label>
                
                </>
              )}
              
            </div>
            ): (
              <div>
                {language ? (<>Você não passou na verificação. Tente novamente em alguns minutos</>) : (<>You failed verification. Try again in a few minutes</>)}
              </div>
            )}

            <div className="d-flex justify-content-between">
          {chances > 0 && next && listEmotions.map((emotion) => (
            <div key={emotion.id}>
              <p onClick={() => verifyEmotion(emotion.nome)}>{emotion.valor}</p> </div>
          ))
          
          
          
          }
          
        </div>           

        </div>


          <div className="form-check mt-2">
            <input value={confirma} type="checkbox" onChange={handleConfirmaChange} className="form-check-input" id="exampleCheck1" required/>
            <label className="form-check-label" for="exampleCheck1">{language ? (<>Proteção conforme a LGPD n° 13.709/2018</>) : (<>Protection under the GDPL (General Data Protection Law)</>)}  </label>
          </div>
          
            <button type="submit" className="btn btn-primary mt-2 my-effect w-100" disabled={checkBlockSend}>{language ? (<>Enviar</>) : (<>Send</>)}</button>
            {
                            messageName && <div className=" d-flex alert alert-dark xxx mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("O Nome Completo está muito curto") : ("Full Name is too short")}</div>
            }
            {
                            messageEmail && <div className=" d-flex alert alert-dark xxx mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("Verifique o e-mail") : ("Check the email")}</div>
            }
            {
                            messagePhone && <div className=" d-flex alert alert-dark xxx mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("Verifique o número de telefone") : ("Check phone number")}</div>
            }
            {
                            messageIsValid && <div className=" d-flex alert alert-dark xxx mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("A validação se é humano precisa ser concluida") : ("Validation if it is human needs to be completed")}</div>
            }

            {
                            messageAgradece && <div className=" d-flex alert alert-dark xxx mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("Agradecemos a sua mensagem!!!") : ("Thanks for your message !!!")}</div>
            }
            <small>{language ? (<>Preencha os campos de forma adequada para habilitar o botão Enviar</>) : (<>Fill in the fields appropriately to enable the Send button</>)}</small>
        </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {language ? ("Fechar") : ("Close")}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

