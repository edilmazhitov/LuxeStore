import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import Root from '../Root/Root'
import Home from '../pages/Home'
import Product from '../pages/Product'
import AboutUs from '../pages/AboutUs'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'product',
        element: <Product />,
      },
      {
        path: 'about-us',
        element: <AboutUs />
      }
    ],
  },
]

export const router = createBrowserRouter(routes)
