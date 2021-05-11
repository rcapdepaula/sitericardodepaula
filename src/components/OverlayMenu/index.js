/* eslint-disable multiline-ternary */
import React from 'react'
import InvertedLogo from '../../images/logo_white.svg'
import CloseButton from '../../images/close_button.svg'
import { Overlay } from './OverlayMenu.styles'

const OverlayMenu = ({ menuOpen, callback }) => {
  return (
    <Overlay menuOpen={menuOpen}>
      <div className="inner">
        <a href="/">
          <img
            className="invertedLogo"
            src={InvertedLogo}
            alt="logo-branco"
            width="250px"
            height="100%"
          />
        </a>
        <ul className="overlayMenu">
          <li>
            <a href="/" activeClassName="nav-active">
              <span>item</span>
            </a>
          </li>
          )
        </ul>
        <div
          className="closeButton"
          onClick={callback}
          role="button"
          tabIndex="0"
          onKeyDown={callback}
        >
          <img
            src={CloseButton}
            alt="botão para fechar mobile menu"
            width="250px"
            height="100%"
          />
        </div>
      </div>
    </Overlay>
  )
}

export default OverlayMenu
