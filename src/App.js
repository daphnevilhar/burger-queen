import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Login } from './Login';
import { Cardapio } from './Cardapio';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/cardapio",
    element: <Cardapio/>,
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
