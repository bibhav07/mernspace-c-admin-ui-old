import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";

export const router = createBrowserRouter([
  {
    path : "/",
    element : <HomePage />
  }, 
  {
    path : "/categories",
    element : <div><h1>hi this is categories...</h1></div>
  }  
])