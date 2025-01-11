import { Box, Card, CardContent, Typography } from '@mui/material'

function Versions(): JSX.Element {
  const versions = [
    {
      name: 'Electron',
      type: window.electron.process.versions.electron
    },
    {
      name: 'Chromium',
      type: window.electron.process.versions.chrome
    },
    {
      name: 'Node',
      type: window.electron.process.versions.node
    }
  ]

  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        margin: 0,
        display: 'inline-flex',
        overflow: 'hidden',
        alignItems: 'center',
        borderRadius: 0
      }}
    >
      {versions.map((version) => (
        <Card key={version.name}>
          <CardContent>
            <Typography variant="caption" fontFamily={'Menlo, Lucida Console, monospace'}>
              {version.name} v{version.type}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  )
}

export default Versions
