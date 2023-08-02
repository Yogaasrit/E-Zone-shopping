import React from 'react'
import { Helmet } from 'react-helmet'
import applyStyle from '../../containers/HOC/Hoc'
import Address from './Address/Address'
import Description from './Description/Description'


const StyledAddress = applyStyle(Address);
const StyledDescription = applyStyle(Description);
const AboutUs = () => {
  return (
    <div>
        <Helmet>
                <title>About-us</title>
        </Helmet>
        <h4>About us</h4>
        <StyledAddress/>
        <StyledDescription/>
    </div>
  )
}

export default AboutUs