import Accordion from 'react-bootstrap/Accordion';

function AllCollapseExample() {
  return (
    <Accordion className='mt-3'>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Preciso ter algum conhecimento prévio?</Accordion.Header>
        <Accordion.Body>
            <p>Sim! É importante ter noções básicas, em:</p>
                <ul>
                    <li>Programação Orientada a Objetos</li>
                    <li>CRUD</li>
                    <li>GIT e GITHUB</li>
                    <li>API</li>
                </ul>
           <p>Isso para poder ter um proveito melhor do conteúdo</p>
        </Accordion.Body>
      </Accordion.Item>  
      <Accordion.Item eventKey="1">
        <Accordion.Header>Onde farei o curso?</Accordion.Header>
        <Accordion.Body>
        O curso está disponível em três plataformas renomadas: <b>Udemy</b>, <b>Eduzz</b> e <b>Hotmart</b>. Independentemente da plataforma de sua preferência, você terá acesso a um roteiro de aprendizado, projetos práticos, avaliações e suporte. Além disso, poderá participar do nosso servidor no Discord para trocar experiências com outros desenvolvedores.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>O que serei capaz de fazer ao final do curso?</Accordion.Header>
        <Accordion.Body>
        <p>Após cada etapa será capaz de desenvolver algo novo:</p>
                <ul>
                    <li>Etapa 1</li>
                    <li>Etapa 2</li>
                    <li>Etapa 3</li>
                    <li>Etapa 4</li>
                    <li>Etapa 5</li>
                </ul>
           <p>Isso para poder ter um proveito melhor do conteúdo.</p>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>O curso é atualizado?</Accordion.Header>
        <Accordion.Body>
        Sim, o curso é atualizado regularmente para se manter alinhado com as demandas do mercado e garantir sua relevância.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Consigo fazer o curso com um grupo de estudo?</Accordion.Header>
        <Accordion.Body>
        Sim! você receberá a <b>opção gratuita</b> de se juntar ao nosso servidor no <b>Discord</b> para os participantes do curso se conectarem, compartilharem experiências, esclarecerem dúvidas, expandirem suas redes de contatos e ficarem por dentro das últimas novidades do mercado e muito mais! Vale lembrar que <b>essa opção é para pessoas que adquiriram o curso e não desistiram</b>, então se optar por não fazer o curso, terá até o período do seu reembolso/estorno para sair do servidor.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header>Tem certificado?</Accordion.Header>
        <Accordion.Body>
        Com certeza! <b>após a conclusão do curso</b> poderá obter o certificado! E se desejar, avaliar o curso. 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="6">
        <Accordion.Header>Posso optar pelo reembolso/estorno?</Accordion.Header>
        <Accordion.Body>
        Você pode solicitar o reembolso/estorno em até <b>7 dias</b> após o início do curso. Todo o seu dinheiro será devolvido de acordo com o método de pagamento utilizado.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;