import styled from 'styled-components'

export const HamburgerButton = styled.div`
  img {
    position: static;
    display: block;
    z-index: 100000;
    right: 30px;
    top: 0;
    width: 34px;
    height: 34px;
    cursor: pointer;
    transition: all 0.2s ease;

    :hover {
      transform: scale(1.2);
    }

    @media (min-width: 992px) {
      display: none;
    }
  }
`
