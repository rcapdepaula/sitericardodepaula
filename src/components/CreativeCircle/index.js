import React from 'react'
import { Wrapper, Content } from './CreativeCircle.styles'
import HeroSlider from '../HeroSlider/HeroSlider'

const CreativeCircle = () => {
  return (
    <Wrapper>
      <HeroSlider />
      <Content>
        <h1>Hello World!</h1>
      </Content>
    </Wrapper>
  )
}

export default CreativeCircle
