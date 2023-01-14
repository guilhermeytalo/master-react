import "./App.css";
import {Component} from "react";
import CardList from "./component/card-list/card-list.component";
import SearchBox from "./component/search-component/search-box.component";

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
                    }
                )
            );
    }

    onSearchChange = (name) => {
        const searchField = name.target.value.toLocaleLowerCase();

        this.setState(() => {
            return {searchField}
        }, () => {
        });
    };


    render() {
        const {monster, searchField} = this.state;
        const {onSearchChange} = this;

        const filteredMonster = monster.filter((monster) => {
            return monster.name.toLocaleLowerCase().includes(searchField);
        });

        return (
            <div className="App">
                <SearchBox
                    onChangeHandler={onSearchChange}
                    placeHolder='Search Monsters'
                    className='monsters-search-box'
                />
                <CardList monsters={filteredMonster}/>
            </div>
        );
    }
}

export default App;
