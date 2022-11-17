import ModalNotification from 'components/Modal';
import './style.css';

export function GridExample() {
  return (
    <div className="card text-center mp-2">
  <div className="card-header">
  Matrizero
  </div>
  <div className="card-body">
    <h5 className="card-title"> '.'</h5>
    <p className="card-text">A Matrizero é uma plataforma de ensino com o foco no mercado de trabalho para desenvolvedores iniciantes e avançados.</p>
    <ModalNotification />
  </div>
  <div className="card-footer text-muted">
    Entrar no mercado não é fácil. Por isso os 100 primeiros alunos(as) que se cadastrarem para receber novidades, vão ganhar 1 curso gratuito
    de sua escolha quando a plataforma estiver no ar! Não é sorteio!
  </div>
</div>
  );
}


export function MultiCards() {
  return (
    <>
    <div className="col-sm">
    <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    </div>
    <div className="col-sm">
    <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    </div>
    <div className="col-sm">
    <div className="card">
    <img className="card-img-top" src="..." alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
    </div>
  </div>
    </div>
    </>
  );
}



