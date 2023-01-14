import {Component} from 'react';

class SearchBox extends Component {
    render() {
        const {className, placeHolder, onChangeHandler} = this.props;
        return (
            <input
                className={className}
                type="search"
                placeholder={placeHolder}
                onChange={onChangeHandler}
            />
        )
    }
}

export default SearchBox