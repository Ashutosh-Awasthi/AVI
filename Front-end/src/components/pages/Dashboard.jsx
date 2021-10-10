import React from 'react'
import Nav from '../utils/Nav'
import Item from '../utils/Item'
import Main from '../utils/Main'
import '../../css/dashboard.css'

const Dashboard = () => {
    return (
        <>
            <Nav classes='navbar navbar-dark fixed-top'/>
            <Main>
                <Nav classes='navbar navbar-light bg-light' heading='Username'/>
                <div className="row" style={{ height: '40vh' }}>
                </div>
                <div className="row">
                    <Item name="Dosa" image="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"/>
                    <Item name="Roti" image="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"/>
                    <Item name="Idli" image="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"/>
                    <Item name="Burger" image="https://www.thespruceeats.com/thmb/vJUFf6L4p8y9Cn_1pE9Z7Ua9uok=/3000x2001/filters:fill(auto,1)/indian-style-burger-1957599-hero-01-266103a4bb4e4ee7b5feb4da2d2e99da.jpg"/>
                </div>
            </Main>
        </>
    )
}

export default Dashboard
