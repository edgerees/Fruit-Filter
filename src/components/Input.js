import React, { Component } from 'react';

class Input extends Component {
    render(){
        return (
            <div>
                <label htmlFor="fruit-filter">Filter these Fruits: </label>
                <input type="text" value={this.props.value} onchange={this.props.onchange} name="fruit-filter" />
            </div>
        )
    }
}

export default Input;