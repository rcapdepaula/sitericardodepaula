import styled from 'styled-components'

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  opacity: ${props => (props.menuOpen ? '1' : '0')};
  transform: ${props =>
    props.menuOpen ? 'translateX(0%)' : 'translateX(-100%)'};
  z-index: 100000;
  background: #fff;
  left: 0px;
  padding: 20px;
  bottom: 0;

  transition: all 0.3s ease;

  .inner {
    display: ${props => (props.childExpand ? 'none' : 'flex')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--darkGrey);
    width: 100%;
    height: 100%;
    color: #fff;
    padding: 40px;

    .invertedLogo {
      max-width: 250px;
      margin: 0 0 60px 0;
    }

    .overlayMenu {
      text-align: center;
      list-style-type: none;
      margin: 0;

      li {
        margin: 0 0 20px 0;
      }

      li.overlayActive {
        color: var(--myColor);
      }

      a {
        font-family: 'Libre Baskerville', Arial, Helvetica, sans-serif;
        font-size: var(--fontMed);
        color: #fff;
        transition: all 0.3s ease;
        text-decoration: none;

        :hover {
          color: var(--myColor);
        }
      }
    }
  }

  .closeButton {
    position: absolute;
    top: 50px;
    right: 50px;
    color: #fff;
    width: 30px;
    height: unset;
    cursor: pointer;
    transition: all 1s ease;
    outline: none;

    :hover {
      transform: rotate(180deg);
    }
  }
  img {
    width: 250px;
    margin: 0;
    padding: 0px 0 0 0;
  }
`
