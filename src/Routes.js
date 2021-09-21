import { BrowserRouter, Route, Switch } from "react-router-dom";
import Main from './views/mainpage';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;