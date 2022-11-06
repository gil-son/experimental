function FormEmail() {

    return (
        <form action="https://api.staticforms.xyz/submit" method="post">
            <input type="hidden" name="accessKey" value="647095ca-9257-41dd-9368-63a1bdbb1629"/>
            <input type="hidden" name="replyTo" value="matrizero.dev@gmail.com" />

            <div class="form-group">
                
                <input type="text" name="name" class="form-control" id="nomeid" aria-describedby="nomeHelp" placeholder="Digite o seu Nome" />
            </div>
            <div class="form-group">
                <input type="email" name="email" class="form-control" id="emailid" aria-describedby="emailHelp" placeholder="Digite o seu e-mail" />
            </div>
            <div class="form-group">
                <input type="phone" name="phone" class="form-control" id="phoneid" aria-describedby="emailHelp" placeholder="Digite um número de contato" />
            </div>
            <div class="form-group">
                <input type="text" name="subject" class="form-control" id="exampleInputPassword1" placeholder="Assunto" />
            </div>
            <div class="form-group">
                <textarea name="message" class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descreva o assunto"></textarea>
            </div>
            <input type="hidden" name="redirectTo" value="http://localhost:3000"></input>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default FormEmail;