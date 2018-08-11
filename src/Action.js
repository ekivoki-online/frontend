import React, {Component} from 'react';
import CommonAction from "./CommonAction";
import EkivokiAction from "./EkivokiAction";

class Action extends Component {
    render() {
        const draft = this.props.draft;

        if(!draft) {
            return <div/>;
        }

        if(draft.type === "COMMON") {
            return (
                <CommonAction draft={this.props.draft}/>
            );
        } else {
            return (
                <EkivokiAction draft={this.props.draft}/>
            );
        }
    }
}

export default Action;
