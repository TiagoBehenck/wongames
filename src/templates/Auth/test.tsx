import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Auth from '.'

describe('<Auth />', () => {
  it('should render all components and children', () => {
    renderWithTheme(
      <Auth title="Auth Title">
        <input type="text" />
      </Auth>
    )

    // verificar 2 logos
    // verificar se tem o heading principal do banner OK
    // verificar se tem subtitle OK
    // verifica se tem o title do content OK
    // verifica se o children esta sendo renderizado OK

    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2)

    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming plataform./i
      })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', {
        name: /Auth Title/i
      })
    ).toBeInTheDocument()

    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })
})
