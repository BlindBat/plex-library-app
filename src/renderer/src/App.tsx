import React from 'react'

import { ReactRouterAppProvider } from '@toolpad/core/react-router'
import { Outlet } from 'react-router'
import NAVIGATION from './consts/navigation'
import BRANDING from './consts/branding'

const App: React.FC = () => {
  return (
    <ReactRouterAppProvider navigation={NAVIGATION} branding={BRANDING}>
      <Outlet />
    </ReactRouterAppProvider>
  )
}

export default App
