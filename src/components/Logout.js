import React from 'react'
import {useNavigate} from "react-router-dom";

const Logout = () => {
const navigate = useNavigate();
	const backToLogin = () => {
	navigate("/");
}
	return (
		<>
		<h1>Logout ?</h1>
		<button onClick={backToLogin}>Back to Login</button>
		</>
	)
}

export default Logout