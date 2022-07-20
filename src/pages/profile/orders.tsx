import { GetServerSidePropsContext } from 'next'

import OrdersList, { OrdersListProps } from 'components/OrdersList'
import Profile from 'templates/Profile'

import mockItems from 'components/OrdersList/mock'
import protectedRoutes from 'utils/protected-routes'

export default function Orders({ items }: OrdersListProps) {
  return (
    <Profile>
      <OrdersList items={items} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      item: mockItems,
      session
    }
  }
}
