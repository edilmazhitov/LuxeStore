import './styles/styles.scss'
import { RouterProvider } from 'react-router-dom'
import { router } from './routing/routing.tsx'

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
