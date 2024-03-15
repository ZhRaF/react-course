import  { useState } from 'react';
import { addTodo } from '../features/todoSlice';
import { useDispatch } from 'react-redux';

function AddTodo() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const eventHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput('');
  };

  return (
    <form onSubmit={eventHandler} className="max-w-lg mx-auto">
      <input
        type="text"
        placeholder="New todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      />
      <label
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        htmlFor="user_avatar"
      >
        Add
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default AddTodo;
