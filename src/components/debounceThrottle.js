import React from 'react'

const debounceThrottle = () => {
const handleChange = (e) => {
	console.log("debouncing...");
}

const handleMouseMove = (e) => {
	console.log("...throttling");
}

//debounce funtion
function debounce(fn, delay){
	let timer;
	return function(...args){
		clearTimeout(timer);
		timer = setTimeout(() => fn(...args), delay);
	};
}

//throttle function
function throttle(func, delay){
	let run= false;
	return function(...args){
		if(!run){
			func(...args);
			run = true;
			setTimeout(() => (run=false), delay);
	}
	};
}

//event listener to track the movement of the mouse
window.addEventListener("mousemove",throttle(handleMouseMove, 2000));

	return (
		<div>
			<p>Search</p>
			<input type='text' onChange={debounce(handleChange,500)}/>
				<button>Send</button>
		</div>
	)
}

export default debounceThrottle