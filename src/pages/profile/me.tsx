import { GetServerSidePropsContext } from 'next'

import FormProfile, { FormProfileProps } from 'components/FormProfile'
import Profile from 'templates/Profile'
import protectedRoutes from 'utils/protected-routes'

export default function Me(props: FormProfileProps) {
  return (
    <Profile>
      <FormProfile {...props} />
    </Profile>
  )
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  return {
    props: {
      session,
      username: session?.user?.name,
      email: session?.user?.email
    }
  }
}
