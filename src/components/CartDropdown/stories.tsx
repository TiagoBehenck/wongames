import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.'

import mockItems from 'components/CartList/mock'

export default {
  title: 'CartDropdown',
  component: CartDropdown,
  args: {
    items: mockItems,
    total: 'R$ 330,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)

export const Empty: Story<CartDropdownProps> = () => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown />
  </div>
)