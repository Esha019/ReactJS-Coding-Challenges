import React from 'react'
import { useEffect, useState } from "react";

const Timercounter = () => {
const [state, updateState] = useState(0);
useEffect(() => {
const interval = setInterval(() => {
  updateState(state + 1);
}, 1000)
return () => {
  clearInterval(interval);
}
}, [state])
	return (
		<div>
	<h1>{state}</h1>
		</div>
	)
}

export default Timercounter