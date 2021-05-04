import React, { useState } from 'react'
import Detail from './Detail'
import Navigation from './Navigation'
import "./HeroSection.css"

const HeroSection = () => {
    const [route, setRoute] = useState("")
    
    return (
        <div className="heroSection">
            <div className="heroLeftSection">
                <Navigation setRoute={setRoute}/>
            </div>
            <div className="heroRightSection">
                <Detail route={route}/>
            </div>
        </div>
    )
}

export default HeroSection
