/* eslint-disable react/prop-types */

const TodoItem = ({ todo, index, removeTodo, toggleComplete }) => {
    return (
        <li style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.text}
            <button onClick={() => toggleComplete(index)}>Toggle Complete</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
        </li>
    );
};

export default TodoItem;