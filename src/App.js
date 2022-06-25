import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state =  {
      name: {firstName: 'Guilherme', lastName: 'Lima'},
      company: 'Google',
    };
  }

  onChangeNameState = () => {
    this.setState({
      name: {firstName: 'Guilherme', lastName: 'Ytalo'},
      company: 'ZTM',
    }, () => { console.log(this.state) });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi {this.state.name.firstName} {this.setState.name.lastName}, I work
            at {this.state.company}
          </p>
          <button onClick={this.onChangeNameState}>
              Change Name
            </button>
        </header>
      </div>
    );   
  }
}

export default App;
