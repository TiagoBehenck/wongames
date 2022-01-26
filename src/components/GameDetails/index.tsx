import { Apple, Linux, Windows } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

type Plataform = 'windows' | 'linux' | 'mac'

type GameDetailsProps = {
  plataforms: Plataform[]
}

const GameDetails = ({ plataforms }: GameDetailsProps) => {
  const plataformIcon = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

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
          <S.Description>GearBox Software</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Plataforms</S.Label>
          <S.IconsWrapper>
            {plataforms.map((icon: Plataform) => (
              <S.Icon key={icon}>{plataformIcon[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}

export default GameDetails
