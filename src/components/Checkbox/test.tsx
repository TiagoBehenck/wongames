import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { render } from 'utils/test-utils'

import theme from 'styles/theme'
import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render with label', () => {
    const { container } = render(
      <Checkbox label="Checkbox label" labelFor="check" />
    )

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render without label', () => {
    render(<Checkbox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with black label', () => {
    render(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Checkbox
        label="checkbox"
        onCheck={onCheck}
        labelFor="check"
        labelColor="black"
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    render(
      <Checkbox
        label="checkbox"
        onCheck={onCheck}
        labelFor="check"
        labelColor="black"
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should call onCheck with false if the Checkbox is already checked', async () => {
    const onCheck = jest.fn()

    render(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be acessible with tab', () => {
    render(<Checkbox label="Checkbox" labelFor="check" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
