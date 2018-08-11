import React, {Component} from 'react';

class CommonAction extends Component {
    render() {
        const draft = this.props.draft;

        return (
            <div>
                <h1>{draft.action}</h1>
                <h2>Тема: {draft.theme}</h2>
                <h3>{draft.word}</h3>
            </div>
        );
    }
}

export default CommonAction;
