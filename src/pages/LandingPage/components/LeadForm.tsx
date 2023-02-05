// Landing Page where user submit lead info
import React, { useEffect } from 'react'
import { toast } from 'react-toastify'
import * as yup from 'yup'
import { FormWithHook, Field } from '../../../components/Form'
import { useLazyFetch } from '../../../util/useLazyFetch'

const leadFormSchema = yup
  .object()
  .shape({
    first_name: yup.string().required('First Name is required'),
    last_name: yup.string().required('Last Name is required'),
    email: yup.string().required('Email is required'),
    address: yup.string().required('Address is required'),
  })
  .required()

const url = `https://lezb2koncl.execute-api.us-west-2.amazonaws.com/test/leads`

export const LeadForm: React.FC<{ onNext: () => void }> = ({ onNext }) => {
  const fields: Record<string, Field> = {
    first_name: { label: 'First Name', type: 'text' },
    last_name: { label: 'Last Name', type: 'text' },
    email: { label: 'Email', type: 'email' },
    dob: { label: 'Date Of Birth', type: 'date' },
    address: { label: 'Address(Australian Only)', type: 'address' },
  }
  const [submitLeadData, { response, error, loading }] = useLazyFetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  useEffect(() => {
    if (error) {
      toast.error('Ops, Something went wrong. Please try again later.')
    }
  }, [error])

  useEffect(() => {
    if (response?.status === 200) {
      toast.success("Success, we've saved your lead!")
      onNext()
    }
  }, [response])

  const onSubmit = (data: any) => {
    submitLeadData(JSON.stringify(data))
  }
  return (
    <FormWithHook
      disabled={loading}
      loading={loading}
      defaultValues={{}}
      schema={leadFormSchema}
      fields={fields}
      onSubmit={onSubmit}
    />
  )
}
