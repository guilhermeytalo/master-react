import "./App.css";
import { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monster: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monster: users };
          },
          () => {
            console.log(this.setState);
          }
        )
      );
  }

  monsterName = (name) => {
    const searchValue = name.target.value.toLocaleLowerCase();
    const filteredMonster = this.state.monster.filter((monster) =>
      monster.name.toLocaleLowerCase().includes(searchValue)
    );

    this.setState(() => {return { monster: filteredMonster }});
  };

  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="search monsters"
          onChange={this.monsterName}
        />
        {this.state.monster.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
