import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [
        {
          id: 1,
          name: "Linda",
        },
        {
          id: 2,
          name: "Frank",
        },
        {
          id: 3,
          name: "Jacky",
        },
        {
          id: 4,
          name: "Andrey",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          )
        })}
      </div>
    );
  }
}

export default App;
