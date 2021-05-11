/* eslint-disable multiline-ternary */
import React from 'react'
import { FooterWrapper, SubFooter, SocialMediaIcons } from './Footer.styles'
import {
  GrInstagram,
  GrYoutube,
  GrFacebook,
  GrTwitter,
  GrLinkedin
} from 'react-icons/gr'
import { RiWhatsappLine } from 'react-icons/ri'
import { SiReact } from 'react-icons/si'

const Footer = () => {
  return (
    <>
      <FooterWrapper>
        <h4>REDES SOCIAIS</h4>

        <SocialMediaIcons>
          <a
            href="instagram.com"
            target="_blank"
            rel="noreferrer"
            alt="instagram"
          >
            <GrInstagram size={28} color="#ffffff" />
          </a>

          <a
            className="left-space"
            href="facebook.com"
            target="_blank"
            rel="noreferrer"
            alt="facebook"
          >
            <GrFacebook size={28} color="#ffffff" />
          </a>

          <a
            className="left-space"
            href="twitter.com"
            target="_blank"
            rel="noreferrer"
            alt="twitter"
          >
            <GrTwitter size={28} color="#ffffff" />
          </a>

          <a
            className="left-space"
            href="linkedin.com"
            target="_blank"
            rel="noreferrer"
            alt="youtube"
          >
            <GrLinkedin size={28} color="#ffffff" />
          </a>

          <a
            className="left-space"
            href="youtube.com"
            target="_blank"
            rel="noreferrer"
            alt="youtube"
          >
            <GrYoutube size={28} color="#ffffff" />
          </a>

          <a
            className="left-space"
            href={`https://api.whatsapp.com/send?phone=52545464684654`}
            target="_blank"
            rel="noreferrer"
            alt="youtube"
          >
            <RiWhatsappLine size={28} color="#ffffff" />
          </a>
        </SocialMediaIcons>
      </FooterWrapper>
      <SubFooter>
        <p>
          {new Date().getFullYear()} Astra ® Feito com{' '}
          <SiReact style={{ verticalAlign: 'middle', paddingBottom: '3px' }} />
        </p>
      </SubFooter>
    </>
  )
}

export default Footer
