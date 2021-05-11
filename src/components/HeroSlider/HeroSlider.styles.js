import styled from 'styled-components'

export const StyledImg = styled.div`
  background: ${props =>
    `linear-gradient(
      to bottom, rgba(32, 33, 35, .8)
      39%,rgba(32, 33, 35, .8)
      41%,rgba(32, 33, 35, .8)
      100%
    ),
    url('${props.image}'), var(--darkGrey)`};
  height: 800px;
  width: 100%;
  background-size: cover;
`

export const WbnSlide = styled.div`
  position: absolute;
  height: 800px;
  width: 100%;
  opacity: 0;
  transition: opacity 1s ease;
  background-size: cover !important;
  background-position: center !important;

  .wbn-overlay-text {
    position: absolute;
    top: 0;
    z-index: 100;
    display: flex;
    display: -ms-flexbox;
    display: -webkit-flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 40px 0;
    width: 100%;
    height: 800px;
    color: white;
    /* opacity: 0;
    transition: all 2.2s;
    transform: translateY(0%);
    transition: all 400ms cubic-bezier(0.645, 0.045, 0.355, 1);  */
    /* easeInOutExpo */

    .wbn-header {
      font-family: 'Montserrat', sans-serif;
      color: #fff;
      font-size: 2rem;
      font-weight: 600;
      line-height: 2rem;
      /* transition: all 1s; */
      /* text-shadow: 2px 2px 0px #000000; */
      /* transform: scale(0.7); */
      margin: 20px 0;

      @media (min-width: 576px) {
        font-size: 2.5rem;
      }

      @media (min-width: 768px) {
        font-size: 3rem;
      }

      @media (min-width: 992px) {
        font-size: 50px;
      }

      @media (min-width: 1200px) {
        font-size: 50px;
        line-height: 60.95px;
      }
    }

    .wbn-text {
      font-family: Arial, Helvetica, sans-serif;
      text-align: center;
      font-size: 0.9rem;
      line-height: 20px;
      font-weight: 800;
      margin: 0 0 40px 0;
      color: white;
      max-width: 707px;
      /* transition: all 1s;
      opacity: 0; */
      /* text-shadow: 2px 2px 0px #000000; */
      /* transform: translateY(50%); */

      @media (min-width: 576px) {
        line-height: 25px;
      }

      @media (min-width: 768px) {
        font-size: 1rem;
      }

      @media (min-width: 992px) {
        font-size: 1.1rem;
        line-height: 30px;
      }

      @media (min-width: 1200px) {
        font-size: 20px;
        font-weight: 400;    
    }

    button {
      border: 0;
      max-width:382px;
      background: #EB7129;
      margin-top: 40px;
      padding: 10px 20px; 
      cursor: pointer;
      transition: all 0.3s ease;
      font-weight: 600;
      font-family: 'Montserrat', Helvetica, sans-serif;
      font-size: 24px;
    }
    span{
      display: inline-block;
      width: 100%;

    }
  }
`

export const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 400px;
  margin: 0 0 60px 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;

  .active {
    z-index: 10;
    opacity: 1;
  }

  .active div {
    opacity: 1;
  }

  .active div .wbn-text {
    opacity: 1;
    transform: translateY(0%);
  }

  .active div .wbn-header {
    opacity: 1;
    transform: scale(1);
  }

  @media (min-width: 768px) {
    height: 600px;
  }

  @media (min-width: 992px) {
    height: 700px;
  }

  @media (min-width: 1200px) {
    height: 800px;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  display: -ms-flexbox;
  display: -webkit-flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  top: 0;
  height: 100%;
  padding: 0 20px 0 20px;
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fff;
  font-size: 20px;
  opacity: 0.7;
  border: 0;
  outline: none;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  transition: all 0.2s;

  :hover {
    transform: scale(1.1);
    opacity: 0.8;
    cursor: pointer;
  }
`
