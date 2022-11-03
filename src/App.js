import "./App.css";
import {Component} from "react";

class App extends Component {
    constructor() {
        super();
        this.state = {
            monster: [],
            searchField: '',
        };
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((users) =>
                this.setState(
                    () => {
                        return {monster: users};
                    },
                    () => {
                        console.log(this.setState);
                    }
                )
            );
    }

    monsterName = (name) => {
        console.log({startingArray: this.state.monster});
        const searchField = name.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField}
        }, () => {
            console.log({endingArray: this.state.monster});
        });
    };


    render() {
        const filteredMonster = this.state.monster.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(this.state.searchField);
        });

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={this.monsterName}
                />
                {filteredMonster.map((monster) => {
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
