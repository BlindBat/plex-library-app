import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid2,
  Input,
  InputLabel,
  Link
} from '@mui/material'
import React, { useState } from 'react'

interface PlexSettings {
  serverUrl: string
  plexToken: string
}

const Settings: React.FC = () => {
  const [settings, setSettings] = useState<PlexSettings>({
    serverUrl: '',
    plexToken: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setSettings((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = (): void => {
    window.electron.ipcRenderer.send('save-plex-settings', settings)
    alert('Settings saved successfully!')
  }

  return (
    <Grid2>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <FormControl>
          <InputLabel htmlFor="server-url">Plex Server URL</InputLabel>
          <Input id="server-url" value={settings.serverUrl} onChange={handleChange} />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="plex-token">Plex Token</InputLabel>
          <Input
            id="plex-token"
            aria-describedby="plex-token-helper-text"
            value={settings.plexToken}
            onChange={handleChange}
          />
          <FormHelperText id="plex-token-helper-text">
            <span>
              To find your Plex token, log in to your Plex account, open your browser’s developer
              tools, and search for X-Plex-Token in network requests or URL parameters.&nbsp;
            </span>
            <Link
              href="https://support.plex.tv/articles/204059436-finding-an-authentication-token-x-plex-token/"
              target="_blank"
              rel="noreferrer"
              color="inherit"
            >
              Learn more
            </Link>
          </FormHelperText>
        </FormControl>
        <Button variant="contained" onClick={handleSave}>
          Save
        </Button>
      </Box>
    </Grid2>
  )
}

export default Settings
