import React, { useState } from 'react'

const ChildToParentInput = () => {
const [text, updateText] = useState("Esha");

const change = (e) => {
	updateText(e.target.value);
}

	return (
		<div>
			<ChildComponent onChange={change}></ChildComponent>
			<p>{text}</p>
		</div>
	)
}

const ChildComponent = ({onChange}) => {
	return <input onChange={onChange}></input>
}

export default ChildToParentInput