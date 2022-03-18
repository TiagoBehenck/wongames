import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import mockItems from 'components/OrdersList/mock'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export function getServerSideProps() {
  return {
    props: {
      item: mockItems
    }
  }
}
