import react from 'react';
import TodoList from './components/TodoList';
import './styles.css';

const App = () => {
    const [todos, setTodos] = react.useState([]);
    const [inputValue, setInputValue] = react.useState('');

    const addTodo = () => {
        if (inputValue.trim()) {
            setTodos([...todos, { text: inputValue, completed: false }]);
            setInputValue('');
        }
    };

    const removeTodo = (index) => {
        const newTodos = todos.filter((_, i) => i !== index);
        setTodos(newTodos);
    };

    const toggleComplete = (index) => {
        const newTodos = todos.map((todo, i) =>
            i === index ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(newTodos);
    };

    return (
        <div className="app">
            <h1>Todo List</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="Add a new task" 
            />
            <button onClick={addTodo}>Add Todo</button>
            <TodoList todos={todos} removeTodo={removeTodo} toggleComplete={toggleComplete} />
        </div>
    );
};

export default App;