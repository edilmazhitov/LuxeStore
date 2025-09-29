import type { RouteObject } from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root.tsx";
import Home from "../pages/Home.tsx";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home/>
      }
    ]
  }
]

export const router = createBrowserRouter(routes)