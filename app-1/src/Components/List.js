import React, {userState} from 'react';
import Todo from './Todo'

const List =(props)=>{
    
    const mappedTodo = props.todoList.map((task, i)=>{
        return <Todo key={i} task={task}/>
    })
    return (
        <div>
            {mappedTodo}
        </div>
    )
}
export default List