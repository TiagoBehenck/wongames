import { render, screen } from 'utils/test-utils'

import items from './mock'

import ExploreSidebar from '.'
import userEvent from '@testing-library/user-event'
import { css } from 'styled-components'
import { Overlay } from './styles'

describe('<ExploreSidebar />', () => {
  it('should render the headings', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /plataforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /high to low/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    render(
      <ExploreSidebar
        items={items}
        initialValues={{
          plataforms: ['windows'],
          sort_by: 'high-to-low'
        }}
        onFilter={jest.fn}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /high to low/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={items}
        initialValues={{
          plataforms: ['windows'],
          sort_by: 'high-to-low'
        }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toBeCalledWith({
      plataforms: ['windows'],
      sort_by: 'high-to-low'
    })
  })

  it('should filter with checked values', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/windows/i))
    userEvent.click(screen.getByLabelText(/linux/i))
    userEvent.click(screen.getByLabelText(/low to high/i))

    expect(onFilter).toHaveBeenCalledTimes(4)
    expect(onFilter).toBeCalledWith({
      plataforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should altern between radio options', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile ', () => {
    const { container } = render(
      <ExploreSidebar items={items} onFilter={jest.fn} />
    )

    const variant = {
      media: '(max-width:768px)',
      modifier: String(css`
        ${Overlay}
      `)
    }

    const Element = container.firstChild

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    expect(Element).toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/close filters/))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)

    userEvent.click(screen.getByLabelText(/open filters/))

    userEvent.click(screen.getByRole('button', { name: /filter/i }))

    expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  })
})
