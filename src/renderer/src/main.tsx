import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { ThemeProvider } from '@mui/material'
import darkBlindTheme from './assets/darkBlindTheme'
import ROUTER from './consts/router'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ThemeProvider theme={darkBlindTheme}>
    <React.StrictMode>
      <RouterProvider router={ROUTER} />
    </React.StrictMode>
  </ThemeProvider>
)
