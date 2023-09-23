export const SET_COUNTER = "SET_COUNTER";
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";
export const RESET = "RESET";
export const UPDATENAME = "UPDATENAME";

export const setCounter = (counter) => ({
	type: SET_COUNTER,
	playload: counter
});

export const incrementCounter = () => ({
	type: INCREMENT_COUNTER
});

export const decrementCounter = () => ({
	type: DECREMENT_COUNTER
});

export const resetCounter = () => ({
	type: RESET
});

export const updateName = () => ({
	type: UPDATENAME
});