import { Component } from "react";

class CardList extends  Component {
    render() {
        console.log(this.props);
        
        return (
                <div>
                    Hello i'm the card list component
                </div>
        )
    }
}

export default CardList;