import React from 'react'
import dayjs from 'dayjs'
import { useFormContext, ControllerRenderProps } from 'react-hook-form'
import TextField from '@mui/material/TextField'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'

export const DateField: React.FC<ControllerRenderProps & { label: string }> = (
  props
) => {
  const { setValue, getValues } = useFormContext()
  const value = getValues(props.name)

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={props.label}
        value={value ? dayjs(value) : null}
        onChange={(newValue) => {
          const formated = dayjs(newValue).format('DD/MM/YYYY')
          setValue(props.name, formated)
        }}
        renderInput={(params) => (
          <TextField {...params} variant="standard" fullWidth />
        )}
      />
    </LocalizationProvider>
  )
}
