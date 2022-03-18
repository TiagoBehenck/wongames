import { render, screen } from '@testing-library/react'

import ExploreSideBar from '.'

describe('<ExploreSideBar />', () => {
  it('should render the heading', () => {
    const { container } = render(<ExploreSideBar />)

    expect(screen.getByRole('heading', { name: /ExploreSideBar/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
