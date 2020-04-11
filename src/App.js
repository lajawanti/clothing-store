import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector, createSelectorCreator } from 'reselect';

import HomePage from './pages/homepage/homepage.component.jsx'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'
import { createUserProfileDocument,  auth } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';


class App extends React.Component {
  state = {
    currentUser : null,
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
      const { setCurrentUser } = this.props;
      this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
        // this.setState({ currentUser : user});
        // console.log(user);
        if(userAuth) {
            //createUserProfileDocument() function returns userRef (firebase.utils.js)
            const userRef = await createUserProfileDocument(userAuth); 

            userRef.onSnapshot(snapShot => {
                setCurrentUser({
                        id: snapShot.id,
                        ...snapShot.data()
                });
            });
        }

        setCurrentUser(userAuth);
      });
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
        <Header />
        <Switch>
            <Route exact path = '/' component = {HomePage} />
            <Route exact path = '/shop' component = {ShopPage} />
            <Route exact path = '/signin' 
                   render = {() => this.props.currentUser ? (
                                   <Redirect to = '/' />    ) : (
                                   <SignInAndSignUp />
                                  )
                   }    
            />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createSelectorCreator({
    currentUser : selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
