import React, {Component} from 'react';

class EkivokiAction extends Component {
    render() {
        const draft = this.props.draft;

        const wordsList = draft.words.map(word => <h3><b>{word}</b></h3>);

        return (
            <div>
                <h1>{draft.title}</h1>
                <h5>{draft.description}</h5>
                {wordsList}
            </div>
        );
    }
}

export default EkivokiAction;
