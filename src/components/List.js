import React, { Component } from 'react';

class List extends Component {
    render(){
        const const fruitItems = this.props.fruits.map((eachFruit,index) => {
            return <li>{eachFruit}</li>
        })
        return (
            <ul>
                {eachFruit}
            </ul>
        )
    }
}

export default List;