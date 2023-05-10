import React, { Component } from 'react'

export default class PopUp extends Component {
  render() {
    return (
        <div className={this.props.active ? 'toCenter active' : 'toCenter'} onClick={() => this.props.setActive(false)}>
          <div className={this.props.active ? 'PopUp active' : 'PopUp'} onClick={e => e.stopPropagation()}>
            {this.props.children}
            
          </div>
        </div>
    )
  }
}
