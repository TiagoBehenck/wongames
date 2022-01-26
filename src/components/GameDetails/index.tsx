import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'
import * as S from './styles'

const GameDetails = () => (
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
    </S.Content>
  </S.Wrapper>
)

export default GameDetails
