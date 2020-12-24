import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';
import User from './components/User/User'
import Alert from './components/Alert/Alert'
import Home from './components/Home/Home'
import NotFound from './components/NotFound/NotFound'
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';
const App = () => {


  // async componentDidMount() {
  //   this.setState({
  //     loading: true
  //   });

  //   const res = await axios.get(`https://api.github.com/users?client_id=$
  //     {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //     {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
  
  //   this.setState({
  //     users: res.data,
  //     loading: false
  //   });
  // }


  return(
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <div className="background">
            <div className="app">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/user/:login" component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  )
}

export default App;
