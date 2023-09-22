import React from 'react'
import { useState } from 'react'

const ToDo = () => {
const [input,setInput] = useState('');
const [todos, setTodos] = useState([]);
const [editingText, setEditingText] = useState('');
const [editingIndex, setEditingIndex] = useState(null);

const handleAdd =(event)=>{
	event.preventDefault();
	setTodos([...todos, input]);
	setInput('');
}

const handleEdit = (index) => {
	setEditingIndex(index);
	setEditingText(todos[index]);
}

const handleDelete = (index) => {
	const newTodo = [...todos];
	newTodo.splice(index, 1);
	setTodos(newTodo);
}

const handleUpdate = (event)=>{
	event.preventDefault();
	const newTodos = [...todos];
	newTodos[editingIndex] = editingText;
	setTodos(newTodos);
	setEditingIndex(null);
	setEditingText('');
}

	return (
		<div>
			<form>
				<input value={input} onChange={(event) => setInput(event.target.value)}/>
				<button onClick={handleAdd} type='submit'>Submit</button>
			</form>

			<ul>
				{todos.map((todo, index) => (
					<li key={index}>
					{index === editingIndex ?
						<form onSubmit={handleUpdate}>
							<input value={editingText} onChange={(event) => setEditingText(event.target.value)}/>
							<button type='submit'>Save</button>
							<button type='button' onClick={() => setEditingIndex(null)}>Cancel</button>
						</form>
					:
					<>
						{todo}
						<button onClick={() => handleEdit(index)}>Edit</button>
						<button onClick={() => handleDelete(index)}>Delete</button>
					</>
         }
				</li>
				))}
			</ul>
		</div>
	)
}

export default ToDo