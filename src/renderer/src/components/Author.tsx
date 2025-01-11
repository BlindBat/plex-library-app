import { Paper, Link, Typography } from '@mui/material'

function Author(): JSX.Element {
  return (
    <Paper sx={{ padding: 2 }} elevation={2}>
      <Typography>
        Made by <Link href="https://t.me/BlindShot">@BlindShot</Link>
      </Typography>
    </Paper>
  )
}

export default Author
