import React, { useEffect } from 'react'
import Nav from '../utils/Nav'
import Main from '../utils/Main'
import Login from '../utils/Login'
import '../../css/home.css'

const Home = () => {
    useEffect(() => {
        const onScroll = () => {
            const nav = document.getElementById('Navbar')
            if (window.scrollY >= window.innerHeight - 10) {
                nav.classList.add("nav-colored");
                nav.classList.remove("nav-transparent");
            }
            else {
                nav.classList.add("nav-transparent");
                nav.classList.remove("nav-colored");
            }
        }

        window.addEventListener('scroll', onScroll)
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    })

    return (
        <>
            <Nav classes='navbar navbar-dark fixed-top' />
            <div id="first">
                <div class="container">
                </div>
            </div>

            <div id="second">
                <div class="container">
                    <div className="container-fluid" id='second'>
                        <div className="row justify-content-end">
                            <div className="col-lg-4 col-11">

                                <div className="container" id='profile-login'>
                                
                                <Login/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Home
