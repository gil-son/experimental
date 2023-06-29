import ModalNotification from 'components/Modal';
import { Carousel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './style.css';
import ImgJava from '../../assets/images/java_em_breve.gif';
import ImgSpringBoot from '../../assets/images/springboot_em_breve.gif';
import ImgApacheCamel from '../../assets/images/apachecamel.gif';
import Carrousel2 from '../../assets/images/carrosel2.png';
import Carrousel4 from '../../assets/images/carrosel4.png';


export function GridExample() {
  return (
    <>
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrousel2 + '?text=First slide&bg=f5f5f5'}
          alt="First slide"
        />
        <Carousel.Caption>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Carrousel4 + '?text=Second slide&bg=eee'}
          alt="Second slide"
        />
        <Carousel.Caption>
          <ModalNotification/>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  );
};


export function AnimatedCard(){

  return (
    <Card className='w-100'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='card-title'>Novidades a caminho!</Card.Title>
        <Card.Text className='card-one'>
        <br/>
        <p>
        💡 Quer dar um passo além no universo da programação e respeitando o seu momento? 
        </p>
        <p>
        A Matrizero tem a solução perfeita para você, seja você um desenvolvedor iniciante ou um aspirante a conquistar o primeiro emprego ou uma nova conquista no mundo tech! 😎
        </p>
        <br/>
        <p>
        Nossos cursos vão te ensinar desde os conceitos básicos até técnicas avançadas, tudo de forma divertida e humorada. Já pensou em ter o poder de dominar as linhas de código como um verdadeiro Neo da programação? 💻🕶️
        </p>
        <br/>
        <p>
        E tem mais, estamos em todos os lugares: YouTube, Udemy e até mesmo em nossas próprias plataformas exclusivas. 🌐📚
        </p>
        <br/>
        <p>
        Quer ficar por dentro de todas as novidades, lançamentos de cursos e dicas quentinhas? Não perca tempo, inscreva-se agora mesmo para receber nossos e-mails cheios de conteúdo, risadas e, claro, os melhores descontos! 💥📧
        </p>
        <br/>
        <p>
        Prepare-se para embarcar nessa jornada incrível rumo ao sucesso na carreira de desenvolvimento, com a Matrizero ao seu lado! Clique no botão abaixo e junte-se a nós nessa aventura! 👇🚀
        </p>
        </Card.Text>
        <ModalNotification/>
      </Card.Body>
    </Card>
  );
}


export function MultiCards() {
  return (
    <>
      <div className="col-sm">
        <div className="card">

          <a href="https://matrizero.com.br/programacao" target='_blank'>
            <img className="card-img-top" src={ImgApacheCamel} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-multiples-titles">Apache Camel</h5>
              <p className="card-multiples">Os Cursos que oferecemos do Apache Camel é indicado para desenvolvedores que já estão em um ambiente de trabalho e/ou tem demandas. Vamos explorar diversas arquiteturas desse poderoso framework! Oferecemos o curso gratuito para a galera curiosa. E, para quem deseja se especializar temos a versão completa!</p>
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
              <h5 className="card-multiples-titles">Java</h5>
              <p className="card-multiples">O Curso de Conceitos Essenciais de Java vai do nível Básico ao Avançado. Esse curso estará disponível em 3 partes. Onde vamos compreender todo o ecossistema Java e suas versões mais atualizadas com o mercado! E, você pode fazer um teste de conhecimento para saber por onde comerçar. É Gratuito!</p>
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
              <h5 className="card-multiples-titles">Spring Boot</h5>
              <p className="card-multiples">O Curso de Conceitos Essenciais do Spring Boot é para você que possui um grau maior de conhecimento em Orientação Objeto e deseja conhecer conceitos e práticas utilizadas por grandes empresas. Vamos endender os bastidores desse framework, pois só codar não é o suficiente! É Gratuito!</p>
              <p className="card-text"><small className="text-muted">Em breve!</small></p>
            </div>
          </a>
        </div>
      </div>
    </>
  );
}



