import Accordion from 'react-bootstrap/Accordion';
import './style.css';

function AllCollapseExample() {
  return (
    <Accordion className='mt-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header><p>Preciso ter algum conhecimento prévio?</p></Accordion.Header>
        <Accordion.Body>
          <span className='accordion-body'>
            <p>Sim! É importante ter noções básicas, em:</p>
                <ul>
                    <li>Programação Orientada a Objetos</li>
                    <li>CRUD</li>
                    <li>GIT e GITHUB</li>
                    <li>API</li>
                </ul>
           <p>Isso para poder ter um proveito melhor do conteúdo</p>
           </span>
        </Accordion.Body>
      </Accordion.Item>  
      <Accordion.Item eventKey="1">
        <Accordion.Header><p>Onde farei o curso?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span className='accordion-body'><p>O curso está disponível em três plataformas renomadas: <b>Udemy</b>, <b>Eduzz</b> e <b>Hotmart</b>. Independentemente da plataforma de sua preferência, você terá acesso a um roteiro de aprendizado, projetos práticos, avaliações e suporte. Além disso, poderá participar do nosso servidor no Discord para trocar experiências com outros desenvolvedores.</p></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><p>O que serei capaz de fazer ao final do curso?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span className='accordion-body'><p>Você passará pelas seguintes etapas:</p>
                <ul>
                    <li>Etapa 1</li>
                    <li>Etapa 2</li>
                    <li>Etapa 3</li>
                    <li>Etapa 4</li>
                    <li>Etapa 5</li>
                </ul>
           <p>A cada etapa, um quizz e um desafio para você desenvolver a sua autônomia! Será capaz de criar/desenvolver projetos e soluções!</p>
          </span>        
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><p>O curso é atualizado?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span><p>Sim, o curso é atualizado regularmente para se manter alinhado com as demandas do mercado e garantir sua relevância.</p></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><p>Consigo fazer o curso com um grupo de estudo?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span><p>Sim! você receberá a <b>opção gratuita</b> de se juntar ao nosso servidor no <b>Discord</b> para os participantes do curso se conectarem, compartilharem experiências, esclarecerem dúvidas, expandirem suas redes de contatos e ficarem por dentro das últimas novidades do mercado e muito mais! Vale lembrar que <b>essa opção é para pessoas que adquiriram o curso e não desistiram</b>, então se optar por não fazer o curso, terá até o período do seu reembolso/estorno para sair do servidor.</p></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><p>Tem certificado?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span><p>Com certeza! <b>após a conclusão do curso</b> poderá obter o certificado! E se desejar, avaliar o curso.</p></span>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header><p>Posso optar pelo reembolso/estorno?</p></Accordion.Header>
        <Accordion.Body className='accordion-body'>
        <span><p>Você pode solicitar o reembolso/estorno em até <b>7 dias</b> após o início do curso. Todo o seu dinheiro será devolvido de acordo com o método de pagamento utilizado.</p></span>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;