import FormEmail from 'components/Form';
import Network from 'components/Network';
import './styles.css';


const Contacts = () => {
  return <>
    <div className="container mt-5 shadow vh-100 mb-5">
      <div className="row">
        <div className="col-sm mt-2 mb-2">
          <div> <Network /></div>
          <div><FormEmail /></div>
        </div>
        <div className="col-sm mt-2 d-flex justify-content-center align-items-center">
        <iframe src="https://giphy.com/embed/xIkOdhhbVsHQoI91vH"  frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        </div>
      </div>
    </div>
  </>;
};

export default Contacts;
