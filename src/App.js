import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Travel from "./Travel";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Travel</h1>
        </header>
        <Travel
          photo = "https://images.salaun-holidays.com/(Image)-image-Pays-Bas-Amsterdam-734-fo_99123407.jpg"
          destination = "Pays-bas"
          country = "Pays-bas"
          distance = "850km"
        />
        <Travel
          photo = "http://www.odeia.fr/1196-large_default/le-japon-entre-tradition-et-modernite-fevrier-2018.jpg"
          destination = "Japon"
          country = "Japon"
          distance = "12000km"
        />
      </div>
    );
  }
}

export default App;
