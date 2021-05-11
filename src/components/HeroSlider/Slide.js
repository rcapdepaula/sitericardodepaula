import React from 'react'

import { StyledImg, WbnSlide } from './HeroSlider.styles'

const Slide = ({ slide, active }) => (
  <WbnSlide className={active ? 'active' : ''}>
    <StyledImg image={slide.image} />
    <div className="wbn-overlay-text">
      <h1 className="wbn-header">Desenvolvimento Front End</h1>
      <p className="wbn-text">
        A mágica do React em suas aplicações com performance e design incríveis,
        para voce alcançar seus objetivos de negócio.
        <button type="button" className="sldie-button">
          <span>COMECE GRÁTIS</span> seu teste de 14 dias
        </button>
      </p>
    </div>
  </WbnSlide>
)

export default Slide
