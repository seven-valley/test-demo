import './App.css';
// on importe la fonction pour créer un router
import { createBrowserRouter,RouterProvider } from "react-router-dom";
// On importe les Pages
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logement from './pages/Logement';


export default function App() {
  // Définitions des routes
  //---------------------------------------------
  const router = createBrowserRouter([
    {path:"/" ,element:<Home />},
    {path:"/about" ,element:<About />},
    {path:"/logement/:id",element:<Logement />},
    {path:"*",element:<Error />}
  ]);
  //---------------------------------------------
 // on injecte le router dans le composant principal
  return (
    <RouterProvider router={router}/>
  );
}

