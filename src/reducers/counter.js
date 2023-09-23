import {INCREMENT_COUNTER, DECREMENT_COUNTER, SET_COUNTER, RESET, UPDATENAME} from "../action/counter"; 

const initialState = {
	count: 10,
	name: "Eswari"
}

const counter = (state = initialState, action) => {
	switch(action.type){
		case SET_COUNTER:
			return{
			...state,
			count: action.payload
		};
		case INCREMENT_COUNTER:
			return{
			...state,
			count: state.count + 1
		};
		case DECREMENT_COUNTER:
			return{
			...state,
			count: state.count - 1
		};
		case RESET:
			return{
			...state,
			count: 0
		};
		case UPDATENAME:
			return{
			...state,
			name: "Esha"
		};
		default:
			return state;
	}
};

export default counter;