import {useState} from 'react';
import {REACT_APP} from '../../utils/request';
import './style.css';

function FormEmail() {

  

    let [ name, setName] = useState("");
    let [ email, setEmail] = useState("");
    let [ phone, setPhone] = useState("");
    let [ subject, setSubject] = useState("");
    let [ message, setMessage] = useState("");
    let [ theCheckbox, setTheCheckbox] = useState(false);
    

    let [ checkSend, setCheckSend] = useState(true);


    let [ messageName, setMessageName] = useState(false);
    let [ messageEmail, setMessageEmail] = useState(false);
    let [ messagePhone, setMessagePhone] = useState(false);
    let [ messageSubject, setMessageSubject] = useState(false);
    let [ messageMessage, setMessageMessage] = useState(false);
    let [ messageSending, setMessageSending] = useState(false);

    let [ count, setCount] = useState(false);

    function verify(){
        

        if(name.length > 1){count++;}else{setMessageName(true); setTimeout( () => {setMessageName(false)},10000);}
        if(email.length > 7 && email.includes("@")){count++;}else{setMessageEmail(true); setTimeout( () => {setMessageEmail(false)},10000);}
        if(phone.length > 7){count++;}else{setMessagePhone(true); setTimeout( () => {setMessagePhone(false)},10000);}
        if(subject.length > 4){count++;}else{setMessageSubject(true); setTimeout( () => {setMessageSubject(false)},10000);}
        if(message.length > 1){count++;}else{setMessageMessage(true); setTimeout( () => {setMessageMessage(false)},10000);}

        if(count == 5 && checkSend == true){setCheckSend(false)}
        console.log(count)
        count=0;
    }

    function verifyCheckBox(){
        
        if(theCheckbox == true){setTheCheckbox(false)}else{setTheCheckbox(true)}
        console.log("theCheckbox", theCheckbox)
    }

    function validate(){
        verifyCheckBox();
        verify();
    }
    
    function waitSecond(){
        
        if(theCheckbox){
            setMessageSending(true)
            setTimeout( () => {setMessageSending(false)},10000);
        }
    }
    
   // https://stackoverflow.com/questions/48213137/when-a-user-click-on-a-submit-button-how-to-wait-1-second-before-activating-it
   // https://github.com/re-ciclo/re-ciclo/blob/master/frontend/src/components/Form/index.jsx 
   
   return (
        <>
        <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="647095ca-9257-41dd-9368-63a1bdbb1629"/>
            <input type="hidden" name="replyTo" value="matrizero.dev@gmail.com" />

            <div className="form-group">
                
                <input type="text" name="name" className="form-control" id="nomeid" aria-describedby="nomeHelp" placeholder="Digite o seu Nome"  value={name}  onChange={(event) => setName(event.target.value)} required />
            </div>
            <div className="form-group">
                <input type="email" name="email" className="form-control" id="emailid" aria-describedby="emailHelp" placeholder="Digite o seu e-mail" value={email}  onChange={(event) => setEmail(event.target.value)} required />
            </div>
            <div className="form-group">
                <input type="phone" name="phone" className="form-control" id="phoneid" aria-describedby="emailHelp" placeholder="Digite um número de contato" value={phone} onChange={(event) => setPhone(event.target.value)} required/>
            </div>
            <div className="form-group">
                <input type="text" name="subject" className="form-control" id="exampleInputPassword1" placeholder="Digite o Assunto" value={subject}  onChange={(event) => setSubject(event.target.value)} required/>
            </div>
            <div className="form-group">
                <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descreva o assunto"  value={message} onMouseLeave={verify} onChange={(event) => setMessage(event.target.value)} required></textarea>
            </div>
            <div>
            
            </div>
            <div className="form-group mt-2" onMouseLeave={verify} onMouseMove={verify}>
            <input type="hidden" name="redirectTo" value={REACT_APP}></input>
            <div className="form-check">
            <input className="form-check-input" type="checkbox" id="flexCheckDefault" onClick={validate} required/>
            <label className="form-check-label" for="flexCheckDefault">
                Estou ciente do envio do e-mail e em até 1 dias útil serei respondido
            </label>
</div>
            <button type="submit" className="btn btn-outline-primary w-100" disabled={checkSend} onClick={waitSecond}>Enviar</button>
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
                            messageMessage && <div className=" d-flex alert alert-dark border border-primary mx-auto my-4 w-100 justify-content-around send-error shadow" role="alert">A mensagem precisa ter o mínimo de 10 caracteres</div>
                        }
                        {
                            messageSending && <div className=" d-flex alert alert-success border border-primary mx-auto my-4 w-100 justify-content-around send-ok shadow" role="alert">Sucesso!</div>
                        }
        </form>
        </>
    );
}

export default FormEmail;