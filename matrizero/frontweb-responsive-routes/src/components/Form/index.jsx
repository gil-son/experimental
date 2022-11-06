

function FormEmail() {
    return (
        <form>
            <div class="form-group">
                
                <input type="text" class="form-control" id="nomeid" aria-describedby="nomeHelp" placeholder="Digite o seu Nome" />
            </div>
            <div class="form-group">
                <input type="email" class="form-control" id="emailid" aria-describedby="emailHelp" placeholder="Digite o seu e-mail" />
            </div>
            <div class="form-group">
                <input type="phone" class="form-control" id="phoneid" aria-describedby="emailHelp" placeholder="Digite um número de contato" />
            </div>
            <div class="form-group">
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Assunto" />
            </div>
            <div class="form-group">
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Descreva o assunto"></textarea>
            </div>
        
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    );
}

export default FormEmail;