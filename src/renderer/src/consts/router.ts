import { createBrowserRouter } from 'react-router'
import App from '../App'
import Dashboard from '../layouts/dashboard'
import Settings from '../components/Settings'
import PlexLibrary from '../components/PlexLibrary'

const ROUTER = createBrowserRouter([
  {
    Component: App, // root layout route
    children: [
      {
        path: '',
        Component: Dashboard,
        children: [
          {
            path: '/library',
            Component: PlexLibrary
          },
          {
            path: '/settings',
            Component: Settings
          }
        ]
      }
    ]
  }
])

export default ROUTER
