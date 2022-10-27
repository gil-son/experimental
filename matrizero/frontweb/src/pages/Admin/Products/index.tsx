import { Route, Switch } from "react-router-dom";
import Form from "./Form";
import List from "./List";


const Products = () => {

    return (
        <Switch>
            <Route path="/admin/networks" exact>
                <List />
            </Route>
            <Route path="/admin/networks/:productId">
                <Form />
            </Route>
        </Switch>
    )
}

export default Products;
