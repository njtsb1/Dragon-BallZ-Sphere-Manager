import React from 'react'
import { render, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Balls from './Balls'

//mocks
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';
import spheres from '../../mocks/spheres.json';
import spheresSuccess from '../../mocks/spheresSuccess.json';

it('Should render all dragon balls', () => {
  const { container } = render(<Balls balls={spheres.balls} profile={profile} />)
  expect(container).toMatchSnapshot()
})

it('Should show not found balls label and button', () => {
  const { getAllByText } = render(<Balls balls={spheres.balls} profile={profile} />)

  const notFound = !!(getAllByText('Not found').length > 0)
  const validateButton = !!(getAllByText('found').length > 0)

  expect(notFound).toBeTruthy()
  expect(validateButton).toBeTruthy()
})

it('Should open modal to validate', () => {
  const { debug, getAllByText, getByText, container } = render(<Balls balls={spheres.balls} profile={profile} />)
  const validateButton = getAllByText('I found')

  fireEvent.click(validateButton[0])

  expect(getByText('Validate')).toBeTruthy()
  expect(container).toMatchSnapshot()

})

it('Should filter', async () => {
  const { debug, getByTestId, getByText, getAllByText, container } = render(<Balls balls={spheres.balls} profile={profile} />)
  const filter = getByTestId('filter')
  fireEvent.click(filter)

  const myDragonBalls = getByText('I dont have').closest('option')
  fireEvent.click(myDragonBalls)

  await waitFor(() => {
    expect(getAllByText('Not found').length).toBe(3)
    // console.log(getAllByText('Encontrada').length)
    // expect(getAllByText('Encontrada')).toBe(3).not.toBeInTheDocument()
  })
})
