import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';





class App extends Component {

  componentDidMount() {
   
    // var request = new XMLHttpRequest();
    // request.onreadystatechange = (e) => {
    //   if (request.readyState !== 4) {
    //     return;
    //   }
    
    //   if (request.status === 200) {
    //     console.log('success', request.responseText);
    //   } else {
    //     console.warn('error');
    //   }
    // };
    
    // request.open('GET', 'http://www.ecoponte.com.br/Xml/TempoViagem.xml?v=43');
    // request.send();


      fetch('http://www.ecoponte.com.br/Xml/TempoViagem.xml?v=43')  
      .then(function(response) {
          return response.json()
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
