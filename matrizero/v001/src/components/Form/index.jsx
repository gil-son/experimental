import {useState, useEffect, useRef} from 'react';
import SessionBlocker from '../../utils/SessionBlocker';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './style.css';

function FormEmail() {

  const isSessionBlockedRef = useRef(0);

    let [ name, setName] = useState("");
    let [ email, setEmail] = useState("");
    let [ phone, setPhone] = useState("");
    let [ subject, setSubject] = useState("");
    let [ message, setMessage] = useState("");
    let [confirm, setConfirm] = useState(false);
    let [rest, setRest] = useState(0);
  let [ checkBlockSend, setCheckBlockSend] = useState(true);
    


    let [ messageName, setMessageName] = useState(false);
    let [ messageEmail, setMessageEmail] = useState(false);
    let [ messagePhone, setMessagePhone] = useState(false);
    let [ messageSubject, setMessageSubject] = useState(false);
    let [ messageMessage, setMessageMessage] = useState(false);
    let [ messageIsValid, setMessageIsValid] = useState(false);
    
    let [ messageSending, setMessageSending] = useState(false);

    const history = useHistory();

    let state = useSelector( state => state);
    var theverify =  JSON.stringify(state);
    const obj = JSON.parse(theverify)
  
    let [ language, setLanguage] = useState(obj.mylanguage.language);
  
    useEffect(() => {
      setLanguage(!language)
   },[obj.mylanguage.language]);

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
  
      setPhone(formattedValue);
    }

function verify(){
  console.log("...........v")      
  if(name.length < 5){setMessageName(true); setTimeout( () => {setMessageName(false)},10000);}else{}
  if(email.length < 8 || !email.includes("@")){setMessageEmail(true); setTimeout( () => {setMessageEmail(false)},10000);}
  if(phone.length < 11){setMessagePhone(true); setTimeout( () => {setMessagePhone(false)},10000);}
  if(subject.length < 5){setMessageSubject(true); setTimeout( () => {setMessageSubject(false)},10000);}
  if(message.length < 10){setMessageMessage(true); setTimeout( () => {setMessageMessage(false)},10000);}else{}
  if(!isValid){setMessageIsValid(true); setTimeout( () => {setMessageIsValid(false)},10000);}


  if(name.length > 3 && email.length > 7 && email.includes("@") && phone.length > 13 && subject.length > 4 && message.length > 9 && isValid){
          setCheckBlockSend(false)
  }else{
          setCheckBlockSend(true)
          let v = document.getElementById("exampleCheck1").value = false
          document.getElementById("exampleCheck1").checked = false
   }

}

  function verifySimples(){

    if(name.length < 4 || email.length < 10 || phone.length < 15 || subject.length < 4 || message.length < 10 || !isValid){
      setCheckBlockSend(true)
      document.getElementById("exampleCheck1").checked = false
    }
  }




function handleSubmit(event) {
  rest = Number(localStorage.getItem('duration')) - Date.now()
  //console.log("rest:", rest)
  //console.log("Agora:", Date.now())
  //console.log("Duracao:", Number(localStorage.getItem('duration')))

  event.preventDefault();
  if(rest>0){
    //console.log("rest of session: ", rest)
    
  }else{
      isSessionBlockedRef.current = false
      //console.log("desblocked, passed: ", rest)
      localStorage.removeItem('duration')
      event.preventDefault();

      // Enviar dados para o SheetDB API usando fetch
      
      let url = '';

        if(new Date().getDay()===0){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===1){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===2){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===3){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===4){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===5){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}
        if(new Date().getDay()===6){url = 'https://sheetdb.io/api/v1/v89vx00xbrigs'}

        
      const data = { name, email, phone, subject, message, confirm };
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(response => response.json())
        .then(() => {
            
            setMessageSending(true)
            // Se o envio dos dados for bem-sucedido, redirecionar o usuário para outra página
            setTimeout( () => {history.push('/');},10000);
          
        })
        .catch(error => {
          console.error(error);
        });
    
      }
  }
  
    function handleNomeChange(event) {
        setName(event.target.value);
        verifySimples()
    }
    
    function handleEmailChange(event) {
        setEmail(event.target.value);
        verifySimples()
    }

    function handlePhoneChange(event) {
        setPhone(event.target.value);
        verifySimples()
        handlePhoneNumberChange(event)
    }

    function handleSubjectChange(event) {
        setSubject(event.target.value);
        verifySimples()
    }

    function handleMessageChange(event) {
        setMessage(event.target.value);
        verifySimples()
    }

    

    function handleConfirmChange() {
      console.log(";;;;;;;;")
    if(document.getElementById("exampleCheck1").checked==true){
        setConfirm(true);
        verify();
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

  

  function verifySession(){
   
    //console.log("Agora:", Date.now())
    //console.log("Duracao:", Number(localStorage.getItem('duration')))
    //console.log(Number(localStorage.getItem('duration')) - Date.now())
    if(Number(localStorage.getItem('duration')) - Date.now() >0){
      
      }else{
        localStorage.removeItem('duration')
        //console.log("rest of session: ", rest)
        //setIsSessionBlocked(false);
        isSessionBlockedRef.current = false;
    }
  }

  useEffect(() => {
    if(chances === 0){
      isSessionBlockedRef.current = true
      localStorage.setItem('time', Date.now());
      localStorage.setItem('duration', Date.now() + 5 * 60 * 1000);
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
        <form onSubmit={handleSubmit} onLoad={verifySession()}>
          
          <div class="form-group">
            <label for="exampleInputNome1">{language ? ("Nome Completo") : ("Complete Name")}</label>
            <input value={name} onChange={handleNomeChange} type="name" class="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder={language ? ("O seu nome completo") : ("Your complete name")}/>
          </div>

          <div class="form-group mt-2">
            <label for="exampleInputEmail1">{language ? ("E-mail") : ("Email")}</label>
            <input value={email} type="email" onChange={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder={language ? ("O seu melhor e-mail") : ("Your best e-mail")}/>
          </div>
          
          
          <div class="form-group mt-2">
            <label for="exampleInputTelefone1">{language ? ("Celular") : ("Cellphone")}</label>
            <input value={phone} type="phone" onChange={handlePhoneChange} class="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder={language ? ("O seu celular com DDD") : ("Your cellphone with area code")}/>
          </div>


          <div class="form-group mt-2">
          {localStorage.getItem('duration') == null ? (
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

        <div class="form-group mt-2">
            <label for="exampleInputTelefone1">{language ? ("Assunto") : ("Subject")}</label>
            <input value={subject} type="phone" onChange={handleSubjectChange} class="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder={language ? ("Informe o assunto") : ("Inform the subject")}/>
        </div>

          <div class="form-group">
            <label for="exampleInputNome1">{language ? ("Mensagem") : ("Message")}</label>
          
            <textarea class="form-control" value={message} onChange={handleMessageChange} type="text" maxlength="150" rows="4" cols="50" placeholder={language ? ("A sua mensagem") : ("Your message")}>
            </textarea>
            </div>
            

          <div class="form-check mt-2">
            <input value={confirm} type="checkbox" onChange={handleConfirmChange} class="form-check-input" id="exampleCheck1" required/>
            <label class="form-check-label" for="exampleCheck1">{language ? (<>Proteção conforme a LGPD n° 13.709/2018</>) : (<>Protection under the GDPL (General Data Protection Law)</>)}  </label>
          </div>
            <div>
            <button type="submit" class="btn btn-primary mt-2 my-effect w-100" disabled={checkBlockSend}>{language ? (<>Enviar</>) : (<>Send</>)}</button>
            </div>
            
                        {
                            messageName && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("O Nome Completo está muito curto") : ("Full Name is too short")}</div>
                        }
                        {
                            messageEmail && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("Verifique o e-mail") : ("Check the email")}</div>
                        }
                        {
                            messagePhone && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("Verifique o número de telefone") : ("Check phone number")}</div>
                        }
                        {
                            messageIsValid && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("A validação se é humano precisa ser concluida") : ("Validation if it is human needs to be completed")}</div>
                        }
                        {
                            messageSubject && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("O Assunto precisa ter o mínimo de 5 caracteres") : ("Subject must be a minimum of 5 characters")}</div>
                        }

                        {
                            messageMessage && <div className="d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">{language ? ("A mensagem está muito curta") : ("Message is too short")}</div>
                        }
                               
                        {
                            messageSending && <div className=" d-flex alert alert-success border border-primary mx-auto my-4 w-100 justify-content-around send-ok shadow" role="alert">{language ? ("Sucesso! Respondemos em até um dia útil!") : ("Success! We respond within one business day!")}</div>
                        }
                        <small>{language ? (<>Preencha os campos de forma adequada para habilitar o botão Enviar</>) : (<>Fill in the fields appropriately to enable the Submit button</>)}</small>
        </form>
        </>
    );
}

export default FormEmail;