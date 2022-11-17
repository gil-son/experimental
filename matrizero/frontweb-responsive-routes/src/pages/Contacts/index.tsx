import FormEmail from 'components/Form';
import Network from 'components/Network';

const Contacts = () => {
  return <>
    <div className="container mt-5 shadow jus">
      
      <div className="row">
        <div className="col-sm">
          <FormEmail />
        </div>
        <div className="col-sm">
          <Network />
        </div>
      </div>
    </div>
  </>;
};

export default Contacts;
