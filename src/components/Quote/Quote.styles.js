import styled from 'styled-components'

export const Wrapper = styled.div`
  background: var(--white);
  text-align: center;
  padding: 0;
  color: var(--darkGrey);
  margin-bottom: 60px;
  opacity: 1;
  transition: all 2.2s;
  transform: translateY(0%);
  transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1);
  /* easeInOutExpo */

  .button-arrow {
    cursor: pointer;
    font-size: 25px;

    &:hover {
      opacity: 0.7;
    }
  }
`

export const Content = styled.div`
  transition: opacity 1s ease;
  position: relative;
  max-width: var(--maxWidth);
  margin: 0 auto;
  opacity: 1;

  h6 {
    font-family: 'Open Sans', Arial, Helvetica, sans-serif;
    font-size: var(--fontMed);
    color: var(--darkGrey);
    font-weight: 600;
  }

  p::selection {
    color: var(--darkGrey);
    background: var(--white);
  }

  @media (max-width: 768px) {
    h6 {
      font-size: 1.3rem;
      line-height: 27px;
    }
  }

  @media (min-width: 920px) {
    .arrow-left {
      position: absolute;
      left: 0;
      top: 50%;
      font-size: 40px;
    }

    .arrow-right {
      position: absolute;
      right: 0;
      top: 50%;
      font-size: 40px;
    }
  }

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active h6 {
    opacity: 1;
    transform: translateY(0%);
  }
  .active p {
    opacity: 1;
    transform: scale(1);
  }
`
export const Icon = styled.div`
  display: block;
  max-width: 40px;
  margin: 20px auto 40px auto;
  font-size: 40px;
`
