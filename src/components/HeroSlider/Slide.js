import React from 'react'

import { StyledImg, WbnSlide } from './HeroSlider.styles'

const Slide = ({ slide, active }) => (
  <WbnSlide className={active ? 'active' : ''}>
    <StyledImg image={slide.image} />
    <div className="wbn-overlay-text">
      <h1 className="wbn-header">Liberdade Para Ensinar</h1>
      <p className="wbn-text">
        Ofereça cursos gravados, cursos ao vivo, download digitais, comunidades,
        ou tudo isso junto sem se preocupar com tecnologia{' '}
        <button type="button" className="sldie-button">
          <span>COMECE GRÁTIS</span> seu teste de 14 dias
        </button>
      </p>
    </div>
  </WbnSlide>
)

export default Slide
