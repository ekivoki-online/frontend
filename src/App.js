import React, {Component} from 'react';
import axios from 'axios'
import Dice from "./Dice";
import './App.css';
import Action from "./Action";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            draft: null
        };

        this.onRoll = this.onRoll.bind(this);
    }

    render() {
        return (
            <div className="App">
                <header>
                </header>
                <div>
                    <Dice onRoll={this.onRoll}/>
                    <Action draft={this.state.draft}/>
                </div>
            </div>
        );
    }

    onRoll(num) {
        axios.get(`api/${num}`)
            .then(response => this.setState({
                draft: response.data
            }));
    }
}

export default App;
