import styled from 'styled-components'

export const CoffeeListContainer = styled.section`
  padding: 0 10rem;
  margin-bottom: 9.8125rem;

  h2 {
    margin-bottom: 1rem;
    font-weight: 800;
    font-size: 2rem;
  }

  @media (max-width: 960px) {
    padding-top: 1rem;
    padding-right: 2rem;
    padding-left: 2rem;

    h2 {
      font-size: 1.5rem;
    }

    margin-bottom: 2rem;
  }
`
export const CoffeeCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 2.5rem;

  @media ((min-width: 601px) and (max-width: 960px)) {
    column-gap: 1rem;
  }
`

export const CoffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${(props) => props.theme['base-card']};
  width: 16rem;
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;
  padding: 1.25rem;

  img {
    width: 7.5rem;
    margin-top: -2.5rem;
    margin-bottom: 0.75rem;
  }

  h4 {
    font-weight: 700;
    font-size: 1.25rem;
    color: ${(props) => props.theme['base-subtitle']};
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-label']};
    text-align: center;
    margin-bottom: 2rem;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
  @media ((min-width: 601px) and (max-width: 960px)) {
    width: calc(50% - 1rem);
  }
`

export const CoffeeTypes = styled.div`
  margin-bottom: 1rem;
  span {
    font-family: 'Roboto', sans-serif;
    font-size: 0.625rem;
    line-height: 1.3;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.25rem 0.5rem;
    border-radius: 16px;
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    margin-bottom: 1rem;
  }
`

export const BuyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: 'Reboto', sans-serif;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  line-height: 1.3;

  span {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    color: ${(props) => props.theme['base-text']};
    font-weight: 800;
    line-height: 1.3;
  }
`

export const CoffeeCardActions = styled.div`
  display: flex;
  column-gap: 0.5rem;
`

export const SelectQuantityContainer = styled.div`
  display: flex;
  align-items: center;
  background: ${(props) => props.theme['base-button']};
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;
  width: 4.5rem;
  height: 2.375rem;

  justify-content: center;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    width: 1.25rem;
    height: 1.25rem;
    text-align: center;
  }
`

const BaseIncrementButton = styled.button`
  border: 0;
  background: transparent;
  cursor: pointer;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 130%;
    color: ${(props) => props.theme['base-title']};
  }

  svg {
    color: ${(props) => props.theme['purple']};
    font-size: 0.875rem;
  }

  &:hover {
    svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`

export const DecrementButton = styled(BaseIncrementButton)``

export const IncrementButton = styled(BaseIncrementButton)``

export const AddToCartButton = styled.button`
  border: 0;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
  height: 2.375rem;
  width: 2.375rem;

  svg {
    font-size: 1.375rem;
    color: ${(props) => props.theme['white']};
  }

  background: ${(props) => props.theme['purple-dark']};

  &:hover {
    background: ${(props) => props.theme['purple']};
  }
`
