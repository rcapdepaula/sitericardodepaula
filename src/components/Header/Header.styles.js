import styled from 'styled-components'

export const Wrapper = styled.header`
  background: transparent;
  height: 110px;
  /* border-bottom: 1px solid #e7e7e7; */
  position: -webkit-sticky; /* Safari */
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10000;
  opacity: 1;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 20px;

  img {
    width: 200px;
    margin: 0;
    padding: 12px 0 0 0;
  }
`

export const TopButtom = styled.button`
  display: flex;
  font-size: 14px;
  align-items: center;
  width: 168px;
  height: 44.29px;
  outline: none;
  border: 0;
  background: #759aed;
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 600;
  font-family: 'Montserrat', Arial, Helvetica, sans-serif;
  display: none;

  ::-moz-focus-inner {
    border: 0;
  }

  @media (min-width: 993px) {
    display: inline-block;

    .icon-buttom-top {
      font-size: 20px;
      vertical-align: middle;
    }
  }
`

export const SocialMedia = styled.span`
  display: flex;
  width: 100px;
  justify-content: space-between;
`
