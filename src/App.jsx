import Navbar from './components/Navbar'
import Feed from './components/Feed'
import Watch from './components/Watch';
import Body from './components/Body';
import { createBrowserRouter } from "react-router-dom";
import {RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children: [
      {
        path: "/",
        element: <Feed />
      },
      {

        path: "/watch",
        element: <Watch />
      }
    ]
  }
])


function App() {


  return (
    <div>
    <Navbar/>
    <RouterProvider router = {appRouter}/>
    
    </div>
  )
}

export default App
