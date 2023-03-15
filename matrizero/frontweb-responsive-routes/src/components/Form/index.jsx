import {useState} from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';

function FormEmail() {

  

    let [ name, setName] = useState("");
    let [ email, setEmail] = useState("");
    let [ phone, setPhone] = useState("");
    let [ subject, setSubject] = useState("");
    let [ message, setMessage] = useState("");
    let [confirm, setConfirm] = useState(false);


  let [ checkBlockSend, setCheckBlockSend] = useState(true);
    


    let [ messageName, setMessageName] = useState(false);
    let [ messageEmail, setMessageEmail] = useState(false);
    let [ messagePhone, setMessagePhone] = useState(false);
    let [ messageSubject, setMessageSubject] = useState(false);
    let [ messageMessage, setMessageMessage] = useState(false);


    let [ messageSending, setMessageSending] = useState(false);

    const history = useHistory();

function verify(){
        
  if(name.length < 3){console.log("nome maior que 3", name.length);  setMessageName(true); setTimeout( () => {setMessageName(false)},10000);}else{console.log("nome menorr ou igual a 3", name.length)}
  if(email.length < 8 || !email.includes("@")){setMessageEmail(true); setTimeout( () => {setMessageEmail(false)},10000);}
  if(phone.length < 11){setMessagePhone(true); setTimeout( () => {setMessagePhone(false)},10000);}
  if(subject.length < 5){setMessageSubject(true); setTimeout( () => {setMessageSubject(false)},10000);}
  if(message.length < 10){console.log("message menor que 10", message.length);  setMessageMessage(true); setTimeout( () => {setMessageMessage(false)},10000);}else{console.log("message maior ou igual a 4", message.length)}


  if(name.length > 2 && email.length > 7 && email.includes("@") && phone.length > 10 && subject.length > 4 && message.length > 9){
          console.log("segundo 2")
          setCheckBlockSend(false)
  }else{
          setCheckBlockSend(true)
          let v = document.getElementById("exampleCheck1").value = false
          document.getElementById("exampleCheck1").checked = false
   }

}

  function verifySimples(){

    if(name.length < 4 || email.length < 8 || phone.length < 8 || subject.length < 4 || message.length < 10){
      setCheckBlockSend(true)
      document.getElementById("exampleCheck1").checked = false
    }
  }




function handleSubmit(event) {
      event.preventDefault();

      // Enviar dados para o SheetDB API usando fetch
      const url = 'https://sheetdb.io/api/v1/v89vx00xbrigs';
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
        
    if(document.getElementById("exampleCheck1").checked==true){
        setConfirm(true);
        verify()
    }else{
        setCheckBlockSend(true)
    }
        
    }
   
   return (
        <>
        <form onSubmit={handleSubmit}>
          
          <div class="form-group">
            <label for="exampleInputNome1">Nome Completo</label>
            <input value={name} onChange={handleNomeChange} type="name" class="form-control" id="exampleInputNome1" aria-describedby="nomeHelp" placeholder="O seu nome completo"/>
          </div>

          <div class="form-group mt-2">
            <label for="exampleInputEmail1">E-mail</label>
            <input value={email} type="email" onChange={handleEmailChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="O seu melhor e-mail"/>
          </div>
          
          
          <div class="form-group mt-2">
            <label for="exampleInputTelefone1">Celular</label>
            <input value={phone} type="phone" onChange={handlePhoneChange} class="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder="O seu celular com DDD"/>
          </div>

          <div class="form-group mt-2">
            <label for="exampleInputTelefone1">Assunto</label>
            <input value={subject} type="phone" onChange={handleSubjectChange} class="form-control" id="exampleInputTelefone1" aria-describedby="telefoneHelp" placeholder="Informe o assunto"/>
          </div>

          <div class="form-group">
            <label for="exampleInputNome1">Mensagem</label>
          
            <textarea class="form-control" value={message} onChange={handleMessageChange} type="text" maxlength="150" rows="4" cols="50" placeholder="A sua mensagem">
            </textarea>
            </div>


          <div class="form-check mt-2">
            <input value={confirm} type="checkbox" onChange={handleConfirmChange} class="form-check-input" id="exampleCheck1" required/>
            <label class="form-check-label" for="exampleCheck1">Proteção conforme a LGPD n° 13.709/2018  </label>
          </div>
            <div>
            <button type="submit" class="btn btn-primary mt-2 my-effect w-100" disabled={checkBlockSend}>Enviar</button>
            </div>
            
                        {
                            messageName && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">O nome precisa ter o mínimo de 3 caracteres</div>
                        }
                        {
                            messageEmail && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Verifique o e-mail</div>
                        }
                        {
                            messagePhone && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">Verifique o número de telefone</div>
                        }
                        {
                            messageSubject && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">O Assunto precisa ter o mínimo de 5 caracteres</div>
                        }
                        
                        {
                            messageMessage && <div className="d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">A mensagem precisa ter ao menos 10 caracteres!</div>
                        }
                        {
                            messageSending && <div className=" d-flex alert alert-success border border-primary mx-auto my-4 w-100 justify-content-around send-ok shadow" role="alert">Sucesso! Respondemos em até um dia últil!</div>
                        }
                        <small>Preencha os campos de forma adquada para habilitar o botão Enviar</small>
        </form>
        </>
    );
}

export default FormEmail;