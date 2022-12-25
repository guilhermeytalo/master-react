import "./App.css";
import {Component} from "react";
import CardList from "./component/card-list/card-list.component";
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
                        console.log(this.state);
                    }
                )
            );
    }

    onSearchChange = (name) => {
        console.log({startingArray: this.state.monster});
        const searchField = name.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField}
        }, () => {
            console.log({endingArray: this.state.monster});
        });
    };


    render() {
      const { monster, searchField } = this.state;
      const { onSearchChange } = this;
      
        const filteredMonster = monster.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <input
                    className="search-box"
                    type="search"
                    placeholder="search monsters"
                    onChange={onSearchChange}
                />
                {/* {filteredMonster.map((monster) => {
                    return (
                        <div key={monster.id}>
                            <h1>{monster.name}</h1>
                        </div>
                    );
                })}*/}
                <CardList />
            </div>
        );
    }
}

export default App;
