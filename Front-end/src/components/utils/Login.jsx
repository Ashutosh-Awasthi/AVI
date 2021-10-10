import React, { useRef,useState } from 'react'
import '../../css/login.css'
import { Link } from 'react-router-dom'

const Login = () => {

    const email = useRef()
    const password = useRef()

    const submitHandeler = (e) => {
        e.preventDefault()

        alert(email.current.value + ' ' + password.current.value)
    }

    return (
        <>
            <form>
                <p>Login</p>
                <div class="mb-3">
                    <input ref={email} type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" style={{ backgroundColor: 'transparent' }} />
                </div>
                <div class="mb-3">
                    <input ref={password} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" style={{ backgroundColor: 'transparent' }} />
                </div>
                <button type="submit" class="btn" onClick={submitHandeler}>Submit</button>
                <div className='d-flex justify-content-between'>
                <Link style={{ color: 'white', fontSize: '.75rem'}} to='/register'>New user?</Link>
                <Link style={{ color: 'white', fontSize: '.75rem'}} to='/register'>Signin with Google</Link>
                </div>
            </form>
        </>
    )
}

export default Login