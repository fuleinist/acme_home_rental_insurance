import React from 'react'
import { render, screen } from '@testing-library/react'
import { expect, jest, test } from '@jest/globals'
import App from './App'

beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {})
  jest.spyOn(console, 'error').mockImplementation(() => {})
  jest.spyOn(console, 'warn').mockImplementation(() => {})
  jest.spyOn(console, 'info').mockImplementation(() => {})
  jest.spyOn(console, 'debug').mockImplementation(() => {})
})

test('renders Home Page', () => {
  render(<App />)
  const element = screen.getByText(/ACME Home Rental Insurance/i)
  expect(element).toBeTruthy()
})
