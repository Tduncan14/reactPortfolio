import React from 'react';
import ReactDOM from 'react-dom';
import{Router,Switch,Route} from'react-router-dom';
import App from './components/App';
import createBrowserHistory from 'history/createBrowserHistory';
import Jokes from './components/Jokes';
import index from './index.css';





ReactDOM.render(<Router history={createBrowserHistory()}>
    <Switch>
        <Route  exact path='/' component={App} />
        <Route path='/jokes'component={Jokes} />
    </Switch>
</Router>,document.getElementById('root'));

