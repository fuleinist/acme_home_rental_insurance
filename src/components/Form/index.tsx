import React from 'react'
import { css } from '@emotion/react'
import { AnyObjectSchema } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, TextField } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { AddressField } from '../AddressField'
import { DateField } from '../DateField'
import { Controller, FormProvider, useForm } from 'react-hook-form'

export type FieldType = 'text' | 'address' | 'date' | 'email'

export type Field = {
  label: string
  type: FieldType
}

export interface FormWithHookProps {
  defaultValues: any
  fields: Record<string, Field>
  schema?: AnyObjectSchema
  onSubmit: (data: any) => void
  disabled?: boolean
  loading?: boolean
}

export const FormWithHook: React.FC<FormWithHookProps> = ({
  defaultValues,
  fields,
  schema,
  onSubmit,
  loading,
  disabled,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  })

  const {
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = methods

  return (
    <FormProvider {...methods}>
      <form
        css={css`
          display: grid;
          gap: 5px;
          width: fit-content;
          margin: auto;
        `}
      >
        {Object.entries(fields).map(([key, props]) => {
          const inputFieldByType = {
            address: AddressField,
            date: DateField,
          }
          const InputField = inputFieldByType[props.type] || TextField
          return (
            <Controller
              name={key}
              control={control}
              render={({ field }) => {
                const error = errors[key]?.message as string
                return (
                  <div className="field">
                    <InputField
                      variant="standard"
                      fullWidth
                      label={props.label}
                      error={!!error}
                      helperText={error}
                      disabled={disabled}
                      {...field}
                    />
                  </div>
                )
              }}
            />
          )
        })}
        <LoadingButton
          onClick={handleSubmit(onSubmit)}
          loading={loading}
          disabled={disabled}
          variant={'contained'}
        >
          Submit
        </LoadingButton>
        <Button onClick={() => reset()} variant={'outlined'}>
          Reset
        </Button>
      </form>
    </FormProvider>
  )
}
