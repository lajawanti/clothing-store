import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import { createUserProfileDocument,  auth } from './firebase/firebase.utils';

class App extends React.Component {
  state = {
    currentUser : null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
      this. unsubscribeFromAuth = auth.onAuthStateChanged(user => {
        // this.setState({ currentUser : user});
        // console.log(user);
        createUserProfileDocument(user);
      })
  }

  componentWillUnmount() {
      this.unsubscribeFromAuth();
  }

  render() {
    return (
      // <div className="App">

      //   <h1>Clothing Store....</h1>

      //   <HomePage />
      // </div>
      <div>
        <Header currentUser = {this.state.currentUser} />
        <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/shop' component = {ShopPage} />
            <Route exact path = '/sign-in' component = {SignInAndSignUp} />

        </Switch>
      </div>
    );
  }
}

export default App;
