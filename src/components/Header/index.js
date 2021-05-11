import React, { useState } from 'react'
import Logo from '../../images/logo_white.svg'
import { Wrapper, Content, TopButtom, SocialMedia } from './Header.styles'
import Navigation from '../Navigation'
import Hamburger from '../Hamburger'
import OverlayMenu from '../OverlayMenu'

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube
} from 'react-icons/ai'
import { FiLinkedin } from 'react-icons/fi'

const Header = () => {
  // open / close overlay menu
  const [menuOpen, setMenuOpen] = useState(false)

  const handleOverlayMenu = () => {
    setMenuOpen(prev => !prev)
  }

  return (
    <>
      <Wrapper>
        <Content>
          <a href="/">
            <img src={Logo} alt="logo-branco" width="250px" height="100%" />
          </a>
          <Navigation menu="itens" />
          <Hamburger handleOverlayMenu={handleOverlayMenu} />
          <OverlayMenu menuOpen={menuOpen} callback={handleOverlayMenu} />
          <SocialMedia>
            <a
              href="instagram.com"
              target="_blank"
              rel="noreferrer"
              alt="instagram"
            >
              <AiOutlineInstagram size={20} color="#ffffff" />
            </a>

            <a
              className="left-space"
              href="facebook.com"
              target="_blank"
              rel="noreferrer"
              alt="facebook"
            >
              <AiOutlineFacebook size={20} color="#ffffff" />
            </a>

            <a
              className="left-space"
              href="youtube.com"
              target="_blank"
              rel="noreferrer"
              alt="youtube"
            >
              <AiOutlineYoutube size={20} color="#ffffff" />
            </a>

            <a
              className="left-space"
              href="linkedin.com"
              target="_blank"
              rel="noreferrer"
              alt="youtube"
            >
              <FiLinkedin size={20} color="#ffffff" />
            </a>
          </SocialMedia>
          <TopButtom>Quero Contratar</TopButtom>
        </Content>
      </Wrapper>
    </>
  )
}

export default Header
