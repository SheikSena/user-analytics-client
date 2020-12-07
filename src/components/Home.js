import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

function App() {

    return (
        <div className="rightpane">
            <Router>
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/register' component={Register} />
                    <Route path='/' component={Dashboard} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
