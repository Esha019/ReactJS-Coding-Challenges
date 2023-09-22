import React from 'react'
import { useState } from 'react'

const Capslockonoff = () => {
const [isCapsLock, setIsCapsLock] = useState(false);

const checkCapsLock=(event)=>{
	if(event.getModifierState("CapsLock")){
		setIsCapsLock(true);
	}else{
		setIsCapsLock(false);
}
}
	return (
		<div>
			<input onKeyUp={checkCapsLock} type='text'></input>

			{isCapsLock && (<p>Warning: CapsLock is ON</p>)}
		</div>
	)
}

export default Capslockonoff