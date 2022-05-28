import { Story, Meta } from '@storybook/react'
import ExploreSidebar, { ExploreSidebarProps } from '.'

import items from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  args: {
    items,
    onFilter: () => ({})
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar {...args} />
)

export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSidebar
    initialValues={{ plataforms: ['windows', 'linux'], sort_by: 'high-to-low' }}
    {...args}
  />
)
