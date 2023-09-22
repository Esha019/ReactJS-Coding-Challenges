import React from 'react'
import {useContext, createContext, useEffect, useState} from "react";

const UserContext = createContext("Unknown");

const ContextAPI = () => {
const [userName, setUserName] = useState("John Smith");
useEffect(() => {
	setTimeout(() => {
	setUserName("Smith");
}, 10000)
}, []);

	return (
		<UserContext.Provider value={userName}>
			<Layout/>
		</UserContext.Provider>
	);
}

function Layout(){
	return(
	<div>
		<Header/>
	</div>
);
}

function Header(){
return(
<div>
	<p>
	<UserInfo/>
</p>
</div>
)
}

function UserInfo(){
const userName = useContext(UserContext);
return <span>{userName}</span>
}
export default ContextAPI