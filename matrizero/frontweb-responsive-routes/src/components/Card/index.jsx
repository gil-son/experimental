import { ModalNotification, ModalCourses, ModalCoursesFree } from 'components/Modal';
import Card from 'react-bootstrap/Card';
import './style.css';
import ImgJavaEng from '../../assets/images/java_animated_eng.gif';
import ImgSpringBootEng from '../../assets/images/spring_animated_eng.gif';
import ImgApacheCamelEng from '../../assets/images/camel_animated_eng.gif';
import ImgJavaPt from '../../assets/images/java_animated_pt.gif';
import ImgSpringBootPt from '../../assets/images/spring_animated_pt.gif';
import ImgApacheCamelPt from '../../assets/images/camel_animated_pt.gif';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';


export function AnimatedCard(){

  let state = useSelector( state => state);
  var verify =  JSON.stringify(state);
  const obj = JSON.parse(verify)

  let [ language, setLanguage] = useState(obj.mylanguage.language);

  useEffect(() => {
    setLanguage(!language)
 },[obj.mylanguage.language]);

  return (
    <Card className='w-100'>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title className='card-title'><center> {language ? 
            (<> Novidades a caminho!</>) : (<> News on the way! </>)}</center></Card.Title>
        <Card.Text className='card-one'>
        <br/>
        
        {language ? 
            (<>
              <p>
                Quer dar um passo além no universo da programação e respeitando o seu momento? 
              </p>
              <p>
                A Matrizero tem a solução perfeita para você, seja você um desenvolvedor iniciante ou um aspirante a conquistar o primeiro emprego ou uma nova conquista no mundo tech!
              </p>
              <br/>
              <p>
                Nossos cursos vão te ensinar desde os conceitos básicos até técnicas avançadas, tudo de forma divertida e humorada. Já pensou em ter o poder de dominar as linhas de código como um verdadeiro Neo da programação?
              </p>
              <br/>
              <p>
                E tem mais, estamos em todos os lugares: YouTube, Udemy e até mesmo em nossas próprias plataformas exclusivas.
              </p>
              <br/>
              <p>
                Quer ficar por dentro de todas as novidades, lançamentos de cursos e dicas quentinhas? Não perca tempo, inscreva-se agora mesmo para receber nossos e-mails cheios de conteúdo, risadas e, claro, os melhores descontos!
              </p>
              <br/>
              <p>
                Prepare-se para embarcar nessa jornada incrível rumo ao sucesso na carreira de desenvolvimento, com a Matrizero ao seu lado! Clique no botão abaixo e junte-se a nós nessa aventura!
              </p>
            </>) :
  
            (<>
                <p>
                  Do you want to take a step further in the universe of programming and respect your moment?
                  </p>
                  <p>
                  Matrizero has the perfect solution for you, whether you are a beginner developer or aspiring to land your first job or achieve a new milestone in the tech world!
                  </p>
                  <br/>
                  <p>
                  Our courses will teach you from basic concepts to advanced techniques, all in a fun and humorous way. Have you ever thought about having the power to master lines of code like a true programming Neo?
                  </p>
                  <br/>
                  <p>
                  And there's more, we are everywhere: YouTube, Udemy, and even on our own exclusive platforms.
                  </p>
                  <br/>
                  <p>
                  Do you want to stay up-to-date with all the news, course launches, and hot tips? Don't waste time, sign up now to receive our emails full of content, laughter, and of course, the best discounts!
                  </p>
                  <br/>
                  <p>
                  Get ready to embark on this incredible journey towards success in the development career, with Matrizero by your side! Click the button below and join us on this adventure!
                </p>
    
            </>)
  
            }
        </Card.Text>
        <center><ModalNotification/></center>
      </Card.Body>
    </Card>
  );
}


export function MultiCards() {

  let state = useSelector( state => state);
  var verify =  JSON.stringify(state);
  const obj = JSON.parse(verify)

  let [ language, setLanguage] = useState(obj.mylanguage.language);

  useEffect(() => {
    setLanguage(!language)
 },[obj.mylanguage.language]);

 const userData = {
  languagem1: 'Camel',
  languagem2: 'Java',
  languagem3: 'Spring Boot'
};

const freeData = {
  languagem1: 'Free Camel',
  languagem2: 'Free Java',
  languagem3: 'Free Spring Boot'
};

  return (
    <>
      <div className="col-sm">
        <div className="card">

          
            <img className="card-img-top" src={language ? ImgApacheCamelPt : ImgApacheCamelEng} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-multiples-titles">Apache Camel</h5>
              <p className="card-multiples">
                     {language ? 
                     (<>Os Cursos que oferecemos do Apache Camel é indicado para desenvolvedores que já estão em um ambiente de trabalho e/ou tem demandas. Vamos explorar diversas arquiteturas desse poderoso framework! Oferecemos o curso gratuito para a galera curiosa. E, para quem deseja se especializar temos a versão completa!</>) 
                     : 
                     (<>The Apache Camel Courses we offer are suitable for developers who are already in a work environment and/or have demands. Let's explore different architectures of this powerful framework! We offer the free course. And, for those who want to specialize, we have the full version!</>)}
              </p>
              <p className="card-text"><small className="text-muted">{language ? (<>Conteúdo atualizado!</>) : (<>Updated content!</>)}</small></p>
            </div>
              <ModalCourses content={userData.languagem1}/>
              <ModalCoursesFree content={freeData.languagem1}/>
        </div>
      </div>
      <div className="col-sm">
        <div className="card">
         
            <img className="card-img-top" src={language ? ImgJavaPt : ImgJavaEng } alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-multiples-titles">Java</h5>
              <p className="card-multiples">
                
                {language ? 
                     (<>O Curso de Conceitos Essenciais de Java vai do nível Básico ao Avançado. Esse curso estará disponível em 3 partes. Onde vamos compreender todo o ecossistema Java e suas versões mais atualizadas com o mercado! E, você pode fazer um teste de conhecimento para saber por onde comerçar. É Gratuito!</>) 
                     : 
                     (<>The Essential Java Concepts Course ranges from Basic to Advanced levels. This course will be available in 3 parts. Where we will understand the entire Java ecosystem and its most up-to-date versions with the market! And, you can take a knowledge test to know where to start. It is free!</>)}
                
              </p>
              <p className="card-text"><small className="text-muted">{language ? (<>Em breve!</>) : (<>Shortly!</>)}</small></p>
            </div>
            <ModalCourses content={userData.languagem2}/>
            <ModalCoursesFree content={freeData.languagem2}/>
        </div>
      </div>
      <div className="col-sm">
        <div className="card">
            <img className="card-img-top" src={language ? ImgSpringBootPt : ImgSpringBootEng} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-multiples-titles">Spring Boot</h5>
              <p className="card-multiples">
                
                {language ? 
                     (<>O Curso de Conceitos Essenciais do Spring Boot é para você que possui um grau maior de conhecimento em Orientação Objeto e deseja conhecer conceitos e práticas utilizadas por grandes empresas. Vamos endender os bastidores desse framework, pois só codar não é o suficiente! É Gratuito!</>) 
                     : 
                     (<>The Spring Boot Essential Concepts Course is for you who have a greater degree of knowledge in Object Orientation and want to learn about concepts and practices used by large companies. Let's understand the backstage of this framework, because just coding is not enough! It is free!</>)}
              </p>
              <p className="card-text"><small className="text-muted">{language ? (<>Em breve!</>) : (<>Shortly!</>)}</small></p>
            </div>
            <ModalCourses content={userData.languagem3}/>
            <ModalCoursesFree content={freeData.languagem3}/>
        </div>
      </div>
    </>
  );
}



