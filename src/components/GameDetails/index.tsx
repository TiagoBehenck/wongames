import { Apple, Linux, Windows } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Plataform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  platforms: Plataform[]
  releaseDate: string
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  platforms,
  releaseDate,
  rating,
  genres
}: GameDetailsProps) => {
  const plataformIcon = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  const releaseDateFormated = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(new Date(releaseDate))

  const getRating = () => {
    if (rating === 'BR0') return 'FREE'

    return `${rating.replace('BR', '')}+`
  }

  const ratingFormated = getRating()

  const genresFormated = genres.join(' / ')

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{releaseDateFormated}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Plataform) => (
              <S.Icon key={icon}>{plataformIcon[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>haha</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{ratingFormated}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genresFormated}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
