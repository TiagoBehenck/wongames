import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

import { initializeApollo } from 'utils/apollo'

import GamesTemplate, { GamesTemplateProps } from 'templates/Games'
import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 1,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: game.cover!.url,
        price: game.price
      })),
      filterItems: filterItemsMock
    }
  }
}
