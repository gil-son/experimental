import FormEmail from 'components/Form';
import Network from 'components/Network';

const Contacts = () => {
  return <>
    <div className="container mt-5 shadow jus">
      
      <div className="row">
        <div className="col-sm mt-2 mb-2">
          <div><FormEmail /></div>
          <div> <Network /></div>
          
        </div>
        <div className="col-sm mt-2">
        <iframe src="https://giphy.com/embed/xIkOdhhbVsHQoI91vH" width="480" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </>;
};

export default Contacts;
