// core imports
import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom'

// style imports
import './App.css';
import {Container, Row, Col, Button} from 'reactstrap'
import SignupPage from './components/SignupPage'

// import components
import HeaderComponent from './components/Header'

function App() {



  const signupFormStateObj = {
    name: '',
    email: '',
    password: '',
    isTermsOn: false,
  }

  const [signupFormState, setSignupFormState] = useState(signupFormStateObj);

  const onChangeHandler = event => {
    setSignupFormState({
      ...signupFormState,
      [event.target.name]:
        ((event.target.type === 'checkbox') || (event.target.type === 'switch')) ?  event.target.checked : event.target.value,
    });
  };

  const onSubmitHandler = event => {
    event.preventDefault();
    // do something
  }

  return (
    <div className="App">
      <HeaderComponent />
      <Route path='/signup'>
        <SignupPage state={signupFormState} onChange={onChangeHandler} onSubmit={onSubmitHandler} />
      </Route>
    </div>
  );
}

export default App;
