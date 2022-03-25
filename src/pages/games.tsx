import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import gamesItemsMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      games: gamesItemsMock,
      filterItems: filterItemsMock
    }
  }
}
