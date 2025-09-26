import type { RouteObject } from "react-router-dom";
import {createBrowserRouter} from "react-router-dom";
import Root from "../Root/Root.tsx";


const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />
  }
]

export const router = createBrowserRouter(routes)