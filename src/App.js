import React from 'react'
import logo from './logo.svg'
import './App.css'
import './styles/custom.css'

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import Auth from './layouts/Auth'
import Main from './layouts/Main'
import Login from './views/Login'
import Signup from './views/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/main" component={Main}></Route>

          <Redirect from="/" to="/login" />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
