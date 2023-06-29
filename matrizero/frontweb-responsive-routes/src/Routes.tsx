import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Programacao from 'pages/Programacao';
import Linguas from 'pages/Linguas';
import Contacts from 'pages/Contacts';

const Routes = () => (
  <BrowserRouter>
    <Navbar the-color/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/programacao">
        <Programacao />
      </Route>
      <Route path="/linguas">
        <Linguas />
      </Route>
      <Route path="/contatos">
        <Contacts />
      </Route>
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Routes;
