import React, {Component} from 'react';

class ListTodo extends Component{
    render(){
        let {id, todo, onRemove} = this.props
        return(
        <li>{todo} <button onClick={() => onRemove(id)}>x</button></li>
        )
    }
}

export default ListTodo