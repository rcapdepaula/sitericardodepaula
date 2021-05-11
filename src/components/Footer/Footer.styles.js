import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: #212121;
  color: #fff;
  text-align: center;
  height: 200px;
  padding-top: 10px;

  p {
    margin: 0;
    padding: 0;
  }

  h4 {
    font-family: 'Libre Baskerville', Arial, Helvetica, sans-serif;
  }
`
export const SocialMediaIcons = styled.div`
  display: flex;
  padding-top: 10px;

  .left-space {
    padding-left: 15px;
  }
`

export const SubFooter = styled.div`
  background: #212121;
  color: #fff;
  justify-content: center !important;
  text-align: center;
  padding: 8px 0px 0px 0px;
  p {
    font-size: var(--fontSmall);
    margin: 0;
    padding: 0px 0px 10px 0px;
    font-family: 'Work Sans', Arial, Helvetica, sans-serif;
  }
`
