import React, {Component} from 'react';
import ReactDice from 'react-dice-complete';
import 'react-dice-complete/dist/react-dice-complete.css'

class Dice extends Component {

    constructor(props) {
        super(props);

        this.state = {
            first: true,
            diceColor: getRandomColor()
        };

        this.onRollDone = this.onRollDone.bind(this)
    }

    render() {
        return (
            <ReactDice
                numDice={1}
                faceColor={this.state.diceColor}
                dotColor="#000000"
                dieSize={120}
                rollTime={2.5}
                outline={true}
                rollDone={this.onRollDone}
            />
        );
    }

    onRollDone(num) {
        if(this.state.first) {
            this.setState({
                first: false
            });
            return;
        }

        this.props.onRoll(num);
    }



}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
}

export default Dice;
