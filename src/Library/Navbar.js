import React from 'react'
import Heading from '../Components/Heading'

export const Navbar = () => {
    return (
        <div>
        <Heading title="Navbar"/>
        <div className="container">
            <div className="navbar ecommerce">
                <div className="navLogo">
                    LOGO
                </div>
                <div className="navSearch ecommerce">
                    <label><i class="fab fa-searchengin"></i></label>
                    <input placeholder="Quick search anything"/>
                </div>
                <div className="navLinks  ecommerce">
                    <button className="navBtn ecommerce">Men</button>
                    <button className="navBtn ecommerce">Women</button>
                    <button className="navBtn ecommerce">Kids</button>
                    <button className="navBtn ecommerce">Offers</button>
                </div>
                <div className="navAction ecommerce">
                    <button className="btn unstyled"><i class="fas fa-user-circle"></i></button>
                    <button className="btn unstyled"><i class="fab fa-gratipay"></i></button>
                    <button className="btn unstyled"><i class="fas fa-shopping-bag"></i></button>
                </div>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522navbar%2520ecommerce%2522%253E%250A%2509%253Cdiv%2520className%253D%2522navLogo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509LOGO%250A%2520%2520%2509%253C%252Fdiv%253E%250A%2520%2520%2509%253Cdiv%2520className%253D%2522navSearch%2520ecommerce%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Clabel%253E%253Ci%2520class%253D%2522fab%2520fa-searchengin%2522%253E%253C%252Fi%253E%253C%252Flabel%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cinput%2520placeholder%253D%2522Quick%2520search%2520anything%2522%252F%253E%250A%2520%2520%2509%253C%252Fdiv%253E%250A%2520%2520%2509%253Cdiv%2520className%253D%2522navLinks%2520%2520ecommerce%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522navBtn%2520ecommerce%2522%253EMen%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522navBtn%2520ecommerce%2522%253EWomen%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522navBtn%2520ecommerce%2522%253EKids%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522navBtn%2520ecommerce%2522%253EOffers%253C%252Fbutton%253E%250A%2520%2520%2509%253C%252Fdiv%253E%250A%2520%2520%2509%253Cdiv%2520className%253D%2522navAction%2520ecommerce%2522%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522btn%2520unstyled%2522%253E%253Ci%2520class%253D%2522fas%2520fa-user-circle%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522btn%2520unstyled%2522%253E%253Ci%2520class%253D%2522fab%2520fa-gratipay%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2509%253Cbutton%2520className%253D%2522btn%2520unstyled%2522%253E%253Ci%2520class%253D%2522fas%2520fa-shopping-bag%2522%253E%253C%252Fi%253E%253C%252Fbutton%253E%250A%2520%2520%2509%253C%252Fdiv%253E%250A%2520%253C%252Fdiv%253E"
                className="iframeLarge"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
            <div className="navbar">
                <div className="navLogo">
                    LOGO
                </div>
                <div className="navLinks">
                    <button className="navBtn">Home</button>
                    <button className="navBtn">About</button>
                    <button className="navBtn">Projects</button>
                    <button className="navBtn">Contact</button>
                </div>
                <div className="navAction">
                    <button className="btn">Sign Out</button>
                </div>
            </div>
            <iframe
                src="https://carbon.now.sh/embed?bg=rgba%28123%2C182%2C123%2C1%29&t=vscode&wt=none&l=htmlmixed&ds=true&dsyoff=20px&dsblur=68px&wc=true&wa=true&pv=56px&ph=56px&ln=false&fl=1&fm=Hack&fs=14px&lh=133%25&si=false&es=2x&wm=false&code=%253Cdiv%2520className%253D%2522navbar%2522%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navLogo%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520LOGO%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navLinks%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522navBtn%2522%253EHome%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522navBtn%2522%253EAbout%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522navBtn%2522%253EProjects%253C%252Fbutton%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522navBtn%2522%253EContact%253C%252Fbutton%253E%250A%2520%2520%2520%2520%253C%252Fdiv%253E%250A%2520%2520%2520%2520%253Cdiv%2520className%253D%2522navAction%2522%253E%250A%2520%2520%2520%2520%2520%2520%2520%2520%253Cbutton%2520className%253D%2522btn%2522%253ESign%2520Out%253C%252Fbutton%253E%250A%2509%253C%252Fdiv%253E%250A%253C%252Fdiv%253E"
                className="iframeSmall"
                sandbox="allow-scripts allow-same-origin">
            </iframe>
        </div>
        </div>
    )
}
