import React from 'react';
import {createBrowserRouter,
RouterProvider,
Route,} from "react-router-dom";

const router = createBrowserRouter([
{
  path: "/",
  element: <div>Hello from Home</div>
},
{
  path: "/test",
  element: <div>Testing</div>
},
]);



function App() {
  return (
    <div className="App">
<RouterProvider router={router} />
    </div>
  );
}

export default App;
