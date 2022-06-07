import {
  QueryHome_banners,
  QueryHome_sections_freeGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryGames_games } from 'graphql/generated/QueryGames'

import { bannerMapper, gamesMapper, highlightMapper } from '.'

describe('bannerMapper()', () => {
  it('should return the right format when mapped', () => {
    const banner = {
      image: {
        url: '/image.jpg'
      },
      title: 'Banner Title',
      subtitle: 'Banner subtitle',
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'small'
      }
    } as QueryHome_banners

    expect(bannerMapper([banner])).toStrictEqual([
      {
        img: '/image.jpg',
        title: 'Banner Title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonColor: 'primary',
        ribbonSize: 'small'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should return the right format when mapped', () => {
    const game = {
      id: 'id',
      name: 'Game name',
      slug: 'game-slug',
      cover: {
        url: '/cover-game.jpg'
      },
      developers: [
        {
          name: 'Developer name'
        }
      ],
      price: 100
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: 'id',
        title: 'Game name',
        slug: 'game-slug',
        developer: 'Developer name',
        img: game.cover?.url.startsWith('/uploads/')
          ? 'http://localhost:1337/cover-game.jpg'
          : '/cover-game.jpg',
        price: 100
      }
    ])
  })
})

describe('highlightMapper()', () => {
  it('should return empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should return the right format when mapped', () => {
    const highlight = {
      title: 'Title',
      subtitle: 'Subtitle',
      background: {
        url: '/background.jpg'
      },
      floatImage: {
        url: '/float-image.jpg'
      },
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    } as QueryHome_sections_freeGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      title: 'Title',
      subtitle: 'Subtitle',
      backgroundImage: '/background.jpg',
      floatImage: '/float-image.jpg',
      buttonLabel: 'button label',
      buttonLink: 'button link',
      alignment: 'left'
    })
  })
})
