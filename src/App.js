import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Navbar from "./components/Navbar";

import ToDo from "./components/ToDo";
import debounceThrottle from "./components/debounceThrottle";
import Timercounter from "./components/Timercounter";
import Capslockonoff from "./components/Capslockonoff";
import ChildtoParent from "./components/ChildtoParent";
import ChildToParentInput from "./components/ChildToParentInput";
import ContextAPI from "./components/ContextAPI";
import FetchAPI from "./components/FetchAPI";
import Counter from "./components/Counter";
function App() {
const appRouter = createBrowserRouter([
{
  path:"/",
  element: <Login/>
},
{
  path:"/logout",
  element: <Logout/>
}
]);
  return (
    <div className="App">
      {/* <ToDo/> */}
      {/* <debounceThrottle/> */}
      {/* <Timercounter/> */}
      {/* <Capslockonoff/> */}
      {/* <ChildtoParent/> */}
      {/* <ChildToParentInput/> */}
      {/* <ContextAPI/> */}
      {/* <FetchAPI/> */}

      {/* <Navbar/>
      <RouterProvider router={appRouter}/> */}
      <Counter/>
    </div>
  );
}

export default App;
