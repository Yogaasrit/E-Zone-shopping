// Hoc is a function
// It takes a component and returns a component
import React from 'react'
const applyStyle =(OrginalComponent) =>{

    
    const newComponent = () => {
      return (
        <>
            <div className='about-us-address'>
            <OrginalComponent/>
            </div>
        </>
      )
      
    }
    return newComponent;
    
}
export default applyStyle