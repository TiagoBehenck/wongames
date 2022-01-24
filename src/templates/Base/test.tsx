import { render, screen } from '@testing-library/react'

import Base from '.'

describe('<Base />', () => {
  it('should render the heading', () => {
    const { container } = render(<Base />)

    expect(screen.getByRole('heading', { name: /Base/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
