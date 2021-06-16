import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Homepage from './pages/homepage/Homepage';
import AboutPage from './pages/about/AboutPage';
import ContactsPage from './pages/contacts/ContactsPage';
import './App.css'

class App extends Component {

  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <Route exact path="/Gourmet-World/" component={Homepage} />
        <Route exact path="/Gourmet-World/About" component={AboutPage} />
        <Route exact path="/Gourmet-World/Contacts" component={ContactsPage} />
      </div>
    )
  }
}

export default App;
