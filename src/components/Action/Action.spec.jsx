import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Action from './Action'

//mocks
import { profile } from '../../mocks/profile.json';
import profileSuccess from '../../mocks/profileSuccess.json';

it('Should render Action', () => {
  const { container, debug, getByText } = render(<Action balls={profile.balls} />)
  const button = getByText('Summon up').closest('button')

  expect(getByText('Summon up shenron')).toBeInTheDocument()
  expect(button).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})

it('Should open modal if user dont have all dragon balls', () => {
  const { debug, getByText } = render(<Action balls={profile.balls} />)
  const button = getByText('Summon up').closest('button')

  fireEvent.click(button)
  expect(getByText('You dont have all spheres to summon shenron')).toBeInTheDocument()

  const backButton = getByText('Back').closest('button')
  fireEvent.click(backButton)

  expect(getByText('Summon up shenron')).toBeInTheDocument()
})

it('Should show shenron', () => {
  const { container, debug, getByText, getByTestId } = render(<Action balls={profileSuccess.profile.balls} />)
  const button = getByText('Summon up').closest('button')

  fireEvent.click(button)
  expect(getByTestId('shenron')).toBeInTheDocument()

  expect(container).toMatchSnapshot()
})


