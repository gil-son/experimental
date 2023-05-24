import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Catalog from 'pages/Catalog';
import Contacts from 'pages/Contacts';

const Routes = () => (
  <BrowserRouter>
    <Navbar the-color/>
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/products">
        <Catalog />
      </Route>
      <Route path="/contacts">
        <Contacts />
      </Route>
    </Switch>
    <Footer/>
  </BrowserRouter>
);

export default Routes;
