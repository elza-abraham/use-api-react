import React, { Component } from 'react';
import './App.css';

const key = 'cd605b9a7b8b517b82492ee7bf47a295'
// ex1: 'api.openweathermap.org/data/2.5/weather?q=London,uk'
// 'https://api.openweathermap.org/data/2.5/weather?q=Danville,us&appid=cd605b9a7b8b517b82492ee7bf47a295'

//  https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22

const getUrl = (city) => {
  return `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${key}`
}

const preStyle = {
  textAlign: 'left',
}

class App extends Component {
  state = {
    city: '',
    weather: 'nothing so far'
  }
  handleChange = (event) => {
    this.setState({
      city: event.target.value
    })
  }

  getData = (event) => {
    console.log('getData: city', this.state.city)
    const url = getUrl(this.state.city)
    console.log('url', url)
    fetch(url)
      .then(data => {
        return data.json()
      })
      .then(json => {
        console.log(json)
        this.setState({ weather: json })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Using API with React</h1>
          <h2>Select a city</h2>
          <input type='text' name='city' onChange={this.handleChange} />
          <button onClick={event => this.getData(event)}>Get Data</button>
        </header>
        <div className="App-intro">
          <h3>Data</h3>
          <div style={preStyle}>
            <pre>
              {JSON.stringify(this.state.weather, null, 2)}
            </pre>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
