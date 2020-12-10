import React, {Component} from 'react';

import List from './List';
import Input from './Input';

class FruitContainer extends Component {
    consturctor(props) {
        super ()
        this.state = {
            fruitsToDisplay: this.props.fruits,

            filterValue: ''
        };
    }

    handleFilterChange= (e) => {
        e.prefentDefault();
        let filterValue = e.target.value;

        const filteredFruitList = this.props.fruit.filter(fruit => {
            return fruit.toLowerCase().includes(filterValue.toLowerCase());
        })
        this.setState({fruitsToDisplay:filteredFruitList, filterValue})
    }




    render(){
        //inside of imput component, to access props, I will say props.value
        //inside of List component, to access props, I will say props.fruits
        return (

            <div>
                <Input value={this.state.filterValue} onchange={this.handleFilterChange}/>
                <List fruits={this.state.fruitsToDisplay}/>
            </div>

        )
    }
}
