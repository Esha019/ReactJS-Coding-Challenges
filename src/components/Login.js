import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom";

const Login = () => {
const [text, setText] = useState('');
const [password, setPassword] =useState("");

const navigate = useNavigate();
const handleClick = (e) =>{
	navigate("/logout");
}

const handleChangeText = (e) => {
	setText(e.target.value);
}

const handleChangePass =(e) => {
	setPassword(e.target.value);
}
	return (
		<div>
			<h1>Login Component</h1>
			<form>
			<h1>User Name</h1>
			<input type='text' value={text} onChange={handleChangeText}/>
			<br/>
			<h1>Password</h1>
			<input type='password' value={password} onChange={handleChangePass}/>
			<br/>
			<button onClick={(e) => handleClick(e)}>Login</button>
			<hr/>
			{[text, password]}
</form>
		</div>
	)
}

export default Login