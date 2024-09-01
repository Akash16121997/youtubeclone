import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./Components/Body";
import Watch from "./Components/Watch";
import Feed from "./Components/Feed";


const approuter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Feed/>
      },
      {
         path:"/watch",
         element:<Watch/>
      }
      
    ]
  }
])

function App() {
  return (
    <div>
      <Navbar />
      
      <RouterProvider router={approuter}/>
      
      
      
      
      
    </div>
  );
}

export default App;
