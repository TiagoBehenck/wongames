import { render, screen } from '@testing-library/react'

import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormSignUp />)

    expect(
      screen.getByRole('heading', { name: /FormSignUp/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
