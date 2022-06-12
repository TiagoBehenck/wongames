import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  it('should render the username', () => {
    render(<UserDropdown username="Tiago" />)

    expect(screen.getByText(/tiago/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    render(<UserDropdown username="Tiago" />)

    userEvent.click(screen.getByText(/tiago/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
