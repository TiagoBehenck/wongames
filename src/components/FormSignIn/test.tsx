import { render, screen } from '@testing-library/react'

import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormSignIn />)

    expect(
      screen.getByRole('heading', { name: /FormSignIn/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
