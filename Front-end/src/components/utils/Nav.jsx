import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
    const heading = props.heading||'Foodie'

    return (
    <nav class={props.classes} id="Navbar">
        <div class="container-fluid">
          <Link class="navbar-brand" to='/dashboard'>{heading}</Link>
        </div>
    </nav>
    )
}

export default Nav
