import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createHashRouter } from 'react-router-dom'
import { HomePage } from './pages/HomePage'
import { SubjectPage } from './pages/SubjectPage'
const router = createHashRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/subject/:code',
    element: <SubjectPage />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
