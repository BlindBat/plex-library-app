import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  TablePagination,
  Autocomplete
} from '@mui/material'
import Grid2 from '@mui/material/Grid2'
import React, { useState } from 'react'
import films from '../consts/films'

const PlexLibrary: React.FC = () => {
  const [filter, setFilter] = useState({
    name: '',
    year: '',
    audio: '',
    video: '',
    url: ''
  })

  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(15)

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ): void => {
    setFilter({
      ...filter,
      [e.target.name as string]: e.target.value as string
    })
  }

  const handleChangePage = (_: unknown, newPage: number): void => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setRowsPerPage(parseInt(event.target.value, 15))
    setPage(0)
  }

  const filteredData = films.filter(
    (item) =>
      item.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      item.year.includes(filter.year) &&
      item.audio.toLowerCase().includes(filter.audio.toLowerCase()) &&
      item.video.toLowerCase().includes(filter.video.toLowerCase()) &&
      item.url.toLowerCase().includes(filter.url.toLowerCase())
  )

  const paginatedData = filteredData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)

  return (
    <Grid2 container direction="column" spacing={2}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={filter.name}
                  onChange={handleFilterChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="Year"
                  name="year"
                  value={filter.year}
                  onChange={handleFilterChange}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="Audio"
                  name="audio"
                  value={filter.audio}
                  onChange={handleFilterChange}
                />
              </TableCell>
              <TableCell sx={{ minWidth: 165 }}>
                <Autocomplete
                  fullWidth
                  options={['1080p', '2160p']}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField {...params} label="Video" variant="outlined" />
                  )}
                  value={filter.video}
                  onChange={(_event, newValue) => {
                    setFilter({
                      ...filter,
                      video: newValue ?? ''
                    })
                  }}
                />
              </TableCell>
              <TableCell>
                <TextField
                  fullWidth
                  label="URL"
                  name="url"
                  value={filter.url}
                  onChange={handleFilterChange}
                />
              </TableCell>
            </TableRow>
          </TableHead>
          <TablePagination
            rowsPerPageOptions={[15, 25, 50]}
            component="div"
            count={filteredData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.year}</TableCell>
                <TableCell>{row.audio}</TableCell>
                <TableCell>{row.video}</TableCell>
                <TableCell>
                  <a href={row.url} target="_blank" rel="noopener noreferrer">
                    {row.url}
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid2>
  )
}

export default PlexLibrary
