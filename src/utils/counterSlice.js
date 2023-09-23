import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: 'counter',
	initialState: {
		count: 10,
		name: "Eswari"},
	reducers: {
		incrementCounter(state){
			state.count += 1
	}
	}
})