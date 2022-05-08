import { Container } from '@material-ui/core'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Auth from './components/Auth/Auth'
function App() {
  return (
    <BrowserRouter>
      <Container maxidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/auth" exact>
            <Auth />
          </Route>
        </Switch>
        {/* <Home /> */}
      </Container>
    </BrowserRouter>
  )
}

export default App
