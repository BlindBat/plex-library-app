import HomeIcon from '@mui/icons-material/Home'
import SettingsIcon from '@mui/icons-material/Settings'
import React from 'react'
import type { Navigation } from '@toolpad/core'

const NAVIGATION: Navigation = [
  {
    kind: 'header',
    title: 'Main items'
  },
  {
    segment: 'library',
    title: 'Plex Library',
    icon: React.createElement(HomeIcon)
  },
  {
    segment: 'settings',
    title: 'Settings',
    icon: React.createElement(SettingsIcon)
  }
]

export default NAVIGATION
