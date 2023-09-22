import React, { useState } from 'react'

const ChildtoParent = () => {
const [count, setCount] = useState(0);

const increment = () => {
	setCount(count +1);
}
	return (
		<div>
			<ChildComponent onClick={increment}/>
			<p>{count}</p>
		</div>
	)
}

const ChildComponent = ({onClick}) => {
	return <button onClick={onClick}>Click</button>
}

export default ChildtoParent