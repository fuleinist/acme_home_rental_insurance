// Landing Page where user submit lead info
import React from 'react'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'

export const ThankyouMessage: React.FC<{ onNext: () => void }> = ({
  onNext,
}) => {
  const text = 'Thank you for saving a new lead!'
  return (
    <div
      css={css`
        margin-top: 20%;
      `}
    >
      <Typography
        variant="h4"
        gutterBottom
        css={css`
          text-align: center;
          opacity: 0;
          animation: fade-in 2s forwards;
        `}
      >
        {text}
      </Typography>
      <div
        css={css`
          text-align: center;
          opacity: 0;
          animation: fade-in 2s forwards;
          animation-delay: 1s;
        `}
      >
        <Button onClick={onNext} color="primary" variant="contained">
          Add another one
        </Button>
      </div>
    </div>
  )
}
