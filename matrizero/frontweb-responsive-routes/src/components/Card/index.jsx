import ModalNotification from 'components/Modal';
import './style.css';

function GridExample() {
  return (
    <div class="card text-center">
  <div class="card-header">
  Matrizero
  </div>
  <div class="card-body">
    <h5 class="card-title"> '.'</h5>
    <p class="card-text">A Matrizero é uma plataforma de ensino com o foco no mercado de trabalho para desenvolvedores iniciantes e avançados.</p>
    <ModalNotification />
  </div>
  <div class="card-footer text-muted">
    Entrar no mercado não é fácil. Por isso os 100 primeiros alunos(as) que se cadastrarem para receber novidades, vão ganhar 1 curso gratuito
    de sua escolha quando a plataforma estiver no ar! Não é sorteio!
  </div>
</div>
  );
}

export default GridExample;