import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Main = styled(Container)`
  ${({ theme }) => css`
    ${media.greaterThan('medium')`
      display: grid;
      grid-template-columns: 26rem 1fr;
      gap: ${theme.grid.gutter};
    `}
  `}
`

export const WrapperLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40rem;

  svg {
    height: 10rem;
    width: 10rem;
  }
`

export const ShowMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10rem;
`

export const ShowMoreButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    cursor: pointer;

    > svg {
      color: ${theme.colors.primary};
    }
  `}
`

export const ShowMoreLoading = styled.img`
  width: 4rem;
`
