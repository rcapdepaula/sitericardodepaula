import React, { useState } from 'react'
import { useInterval } from './useInterval'
import Hero1 from '../../images/1920x1080-hero1.webp'
import Hero2 from '../../images/1920x1080hero2.webp'
import Hero3 from '../../images/1920x1080hero3.webp'

import Slide from './Slide'

import { SliderWrapper } from './HeroSlider.styles'

const HeroSlider = () => {
  const slides = [
    {
      id: '01',
      image: Hero1,
      title: 'Lorem ipsum',
      subtitle: 'consectetur adipiscing elit'
    },
    {
      id: '02',
      image: Hero2,
      title: 'Lolor sit amet',
      subtitle: 'consectetur adipiscing elit'
    },
    {
      id: '03',
      image: Hero3,
      title: 'Onsectetur amet',
      subtitle: 'consectetur adipiscing elit'
    }
  ]

  const [state, setState] = useState({
    slides,
    activeIndex: 0,
    autoSlide: true,
    interval: 3000
  })

  // By Dan Abramov overreacted.io
  useInterval(
    () => {
      setState(prev => ({
        ...prev,
        activeIndex: (prev.activeIndex + 1) % prev.slides.length
      }))
    },
    state.autoSlide ? state.interval : null
  )

  return (
    <SliderWrapper>
      {slides.map((slide, i) => (
        <Slide key={slide.id} slide={slide} active={state.activeIndex === i} />
      ))}
    </SliderWrapper>
  )
}

export default HeroSlider
