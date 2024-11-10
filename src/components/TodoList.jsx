/* eslint-disable react/prop-types */
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, toggleComplete }) => {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem 
                    key={index} 
                    todo={todo} 
                    index={index} 
                    removeTodo={removeTodo} 
                    toggleComplete={toggleComplete} 
                />
            ))}
        </ul>
    );
};

export default TodoList;