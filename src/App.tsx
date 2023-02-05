import React from 'react'
import { ToastContainer } from 'react-toastify'
import { Typography } from '@mui/material'
import { LandingPage } from './pages/LandingPage'
import { css } from '@emotion/react'
import 'react-toastify/dist/ReactToastify.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography
          variant="h3"
          gutterBottom
          css={css`
            text-align: center;
          `}
        >
          ACME Home Rental Insurance
        </Typography>
      </header>
      <div className="App-content">
        {' '}
        <LandingPage />
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        theme="light"
      />
    </div>
  )
}

export default App
