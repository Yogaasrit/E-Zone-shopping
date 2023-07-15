import React from 'react'
// import Footer from '../../components/Footer/Footer'
// import Header from '../../components/Header/Header'
import { Helmet } from 'react-helmet'
import TodayMegaDeals from '../../components/TodayMegaDeals/TodayMegaDeals'

const HomePage = () => {
  return (
    <div>
      <Helmet>
          <title>Home</title>
      </Helmet>
      <TodayMegaDeals/>
    </div>
  )
}
export default HomePage