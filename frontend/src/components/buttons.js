import React, {Component} from 'react'
import '../styles/button.css';

export default class ButtonBase extends Component {

    render() {
        return(
            <a href={this.props.link}  className={'btn red '+ this.props.variant} >{this.props.content}</a>
        )
        
    }
}