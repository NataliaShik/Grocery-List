import { Component } from 'react';
import basket from './shopping-basket.png'

export class GroceryList extends Component {
    state = {
        userInput: '',
        groceryList: []
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    addItem(input) {
        if (input === '') {
            alert ("Please enter an item!")
        }
        else {
        let listArray = this.state.groceryList;
        listArray.push(input);
        this.setState({groceryList: listArray, userInput: ''})
        console.log(listArray)
        }
    }

    deleteItem() {
        let listArray = this.state.gloceryList;
        listArray = [];
        this.setState({groceryList: listArray})
    }
 
    crossedWord(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    render() {
        return(
            <div>
            <form onSubmit={this.onFormSubmit}>    
                <div className='container'>
                    <input type='text'
                    placeholder='What to buy?'
                    onChange={(e) => {this.onChangeEvent(e.target.value)}}
                    value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className="btn add">Add</button>
                </div>
                <ul>
                    {this.state.groceryList.map((item, index) => (
                    <li onClick={this.crossedWord} key={index}>
                        <img src={basket} width="35px" alt="basket"/>
                        {item}
                    </li> 
                    ))}
                </ul>
                <div className='container'>
                    <button onClick={() => this.deleteItem()} className="btn delete">Delete</button>
                </div>
            </form>   
            </div>
        )
    }
}