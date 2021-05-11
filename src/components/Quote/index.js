import React, { useState, useEffect } from 'react'
import { Content, Wrapper, Icon } from './Quote.styles'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { FaQuoteLeft } from 'react-icons/fa'

const Quote = () => {
  const quotes = [
    {
      testimony:
        'Melhor experiência em toda vida. RICARDO é simplesmente sensacional. Engajamento muito acima da média.',
      author: 'Franklin Gomes / CEO Franklin Gomes Adv'
    },
    {
      testimony:
        'Extremamente disponíveis e abertos. Entenderam as características da nossa empresa e mergulharam fundo.',
      author: 'Rogério Ferreira Barbosa / diretor - rfb sistemas'
    },
    {
      testimony:
        'Entendeu as características da nossa empresa e mergulhou fundo em nosso projeto.',
      author: 'Carolina Schramm / diretora - conecta2you'
    }
  ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex(prev => (prev + 1 >= quotes.length ? 0 : prev + 1))
    }, 5000)

    return () => {
      window.clearInterval(timer)
    }
  }, [quotes])

  const [activeIndex, setActiveIndex] = useState(0)

  const handleNextClick = () => {
    setActiveIndex(prev => (prev + 1 >= quotes.length ? 0 : prev + 1))
  }

  const handlePrevClick = () => {
    setActiveIndex(prev =>
      // if we're at the beginng, go to the end,
      // otherwise decrement the index
      prev === 0 ? 2 : prev - 1
    )
  }

  return (
    <Wrapper>
      <Content>
        <Icon>
          <FaQuoteLeft />
        </Icon>
        <h6>{quotes[activeIndex].testimony}</h6>
        <p>{quotes[activeIndex].author}</p>
        <IoIosArrowBack
          className="button-arrow arrow-left"
          onClick={handlePrevClick}
        >
          Anterior
        </IoIosArrowBack>
        <IoIosArrowForward
          className="button-arrow arrow-right"
          onClick={handleNextClick}
        >
          Próximo
        </IoIosArrowForward>
      </Content>
    </Wrapper>
  )
}

export default Quote
