import React from 'react'
import { TextField } from '@mui/material'
import { usePlacesWidget } from 'react-google-autocomplete'
import { useFormContext, ControllerRenderProps } from 'react-hook-form'

export const AddressField: React.FC<ControllerRenderProps> = (props) => {
  const { setValue } = useFormContext()
  const { ref: materialRef } = usePlacesWidget({
    apiKey:
      //https://github.com/ErrorPro/react-google-autocomplete/issues/200#issuecomment-1401696101
      process.env.REACT_APP_GOOGLE_PLACES_API + '&callback=Function.prototype',
    onPlaceSelected: (place) => {
      const { formatted_address } = place
      setValue(props.name, formatted_address)
    },
    options: {
      types: ['geocode', 'establishment'],
      componentRestrictions: { country: 'aus' },
    },
  })
  return (
    <TextField
      fullWidth
      color="secondary"
      variant="standard"
      inputRef={materialRef}
      {...props}
    />
  )
}
