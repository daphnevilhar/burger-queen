import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
    {
      path: "/teste-palomita",
      element: <div>Hello world!</div>,
    },
]);



function App() {
  return (
  <RouterProvider router={router} />
    // <div className="App">
    //   <Logo />
    //   <Login />
    // </div>
  );
}

export default App;
