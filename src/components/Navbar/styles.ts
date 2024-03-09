import styled from 'styled-components'

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;

  @media (max-width: 320px) {
    width: 100%;
    margin: 0;
    padding: 2rem;
    gap: 8px;

    a {
      img {
        width: 4.5rem;
      }
    }

    div {
      span {
        svg {
          font-size: 0.875rem !important;
        }

        padding: 1rem;

        font-size: 0.875rem;
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
      }
    }
  }

  @media ((min-width: 321px) and (max-width: 600px)) {
    width: 100%;
    margin: 0;
    padding: 2rem;
    gap: 8px;

    a {
      img {
        width: 10rem;
      }
    }

    div {
      span {
        svg {
          font-size: 0.875rem !important;
        }

        font-size: 0.875rem;
        font-family: 'Roboto', sans-serif;
        line-height: 1.3;
      }
    }
  }

  @media ((min-width: 601px) and (max-width: 960px)) {
    padding: 2rem;
  }

  div {
    display: flex;
    gap: 0.75rem;

    span {
      display: flex;
      align-items: center;
      background: ${(props) => props.theme['purple-light']};
      color: ${(props) => props.theme['purple']};
      padding: 0.5rem;
      gap: 0.25rem;
      border-radius: 6px;
      font-family: 'Roboto', sans-serif;
      line-height: 1.3;

      svg {
        font-size: 22px;
        color: ${(props) => props.theme['purple']};
      }
    }

    button {
      border: 0;
      background: ${(props) => props.theme['yellow-light']};
      padding: 0.5rem;
      border-radius: 6px;
      cursor: pointer;
      position: relative;

      span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme['white']};
        width: 1.25rem;
        height: 1.25rem;
        top: -0.5rem;
        right: -0.5rem;
        border-radius: 100%;
        padding: unset;
        gap: unset;

        font-family: 'Roboto';
        font-weight: 700;
        font-size: 0.75rem;
      }

      svg {
        font-size: 1.375rem;
        color: ${(props) => props.theme['yellow-dark']};
      }
    }
  }
`
