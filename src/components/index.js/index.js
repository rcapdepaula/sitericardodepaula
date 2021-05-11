import React from 'react'
import { GlobalStyles, Primary } from '../../GlobalStyle'
// components
import Header from '../Header'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <GlobalStyles />
      <Primary>{children}</Primary>
      <Footer />
    </>
  )
}

export default Layout
