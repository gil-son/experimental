import ModalNotification from 'components/Modal';
import './style.css';
import ImgJava from '../../assets/images/java_em_breve.gif';
import ImgSpringBoot from '../../assets/images/springboot_em_breve.gif';
import ImgApacheCamel from '../../assets/images/apachecamel.gif';

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
        Cadastre-se para receber novidades e concorra a prêmios. Confira as regras no <a href="https://www.youtube.com/@matrizero230/featured" target='_blank'><u>canal da Matrizero</u></a>
      </div>
    </div>
  );
}


export function MultiCards() {
  return (
    <>
      <div className="col-sm">
        <div className="card">

          <a href="https://matrizero.com.br/products" target='_blank'>
            <img className="card-img-top" src={ImgApacheCamel} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Apache Camel</h5>
              <p className="card-text">Os Cursos que oferecemos do Apache Camel é indicado para desenvolvedores que já estão em um ambiente de trabalho e/ou tem demandas. Vamos explorar diversas arquiteturas desse poderoso framework! Oferecemos o curso gratuito para a galera curiosa. E, para quem deseja se especializar temos a versão completa!</p>
              <p className="card-text"><small className="text-muted">Conteúdo atualizado!</small></p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card">
          <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
            <img className="card-img-top" src={ImgJava} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Java</h5>
              <p className="card-text">O Curso de Conceitos Essenciais de Java vai do nível Básico ao Avançado. Esse curso estará disponível em 3 partes. Onde vamos compreender todo o ecossistema Java e suas versões mais atualizadas com o mercado! E, você pode fazer um teste de conhecimento para saber por onde comerçar. É Gratuito!</p>
              <p className="card-text"><small className="text-muted">Em breve!</small></p>
            </div>
          </a>
        </div>
      </div>
      <div className="col-sm">
        <div className="card">
          <a href="https://www.youtube.com/@matrizero230/playlists" target='_blank'>
            <img className="card-img-top" src={ImgSpringBoot} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">Spring Boot</h5>
              <p className="card-text">O Curso de Conceitos Essenciais do Spring Boot é para você que possui um grau maior de conhecimento em Orientação Objeto e deseja conhecer conceitos e práticas utilizadas por grandes empresas. Vamos endender os bastidores desse framework, pois só codar não é o suficiente! É Gratuito!</p>
              <p className="card-text"><small className="text-muted">Em breve!</small></p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}



