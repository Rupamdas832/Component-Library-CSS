import React, { useEffect } from 'react'
import "./Detail.css"

import { Avatar, Badge, Button, Card, Dropdown, Form, GettingStarted, Input, Modal, Navbar, Spinner, Toast, Tooltip } from '../Library'

const Detail = ({route = "button"}) => {


    const renderSwitch = () => {
        switch(route) {
            case 'getting started':
                return <GettingStarted/>;
            case 'button':
                return <Button/>;
            case 'avatar':
                return <Avatar/>
            case 'form':
                return <Form/>
            case 'input':
                return <Input/>
            case 'card':
                return <Card/>
            case 'navbar':
                return <Navbar/>
            case 'modal':
                return <Modal/>
            case 'tooltip':
                return <Tooltip/>
            case 'badge':
                return <Badge/>
            case 'dropdown':
                return <Dropdown/>
            case 'spinner':
                return <Spinner/>
            case 'toast':
                return <Toast/>
            default :
                return <GettingStarted/>
        }
    }
    return (
        <div className="detailSection">
           {renderSwitch()}
           <button className="btnFloat md moveUp" onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}><i class="fas fa-arrow-up"></i></button>
        </div>
    )
}

export default Detail
