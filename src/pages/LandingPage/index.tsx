// Landing Page where user submit lead info
import React, { useState } from 'react'
import { css } from '@emotion/react'
import { Typography } from '@mui/material'
import { LeadForm } from './components/LeadForm'
import { ThankyouMessage } from './components/ThankyouMessage'

export const LandingPage: React.FC = () => {
  const [showThankyou, setShowThankyou] = useState(false)
  return (
    <div>
      <div>
        {!showThankyou ? (
          <>
            <Typography
              variant="h5"
              gutterBottom
              css={css`
                text-align: center;
              `}
            >
              Enter Lead Details:
            </Typography>
            <LeadForm
              onNext={() => {
                setShowThankyou(true)
              }}
            />
          </>
        ) : (
          <ThankyouMessage
            onNext={() => {
              setShowThankyou(false)
            }}
          />
        )}
      </div>
    </div>
  )
}
