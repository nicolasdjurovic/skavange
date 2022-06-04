import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/logo.png'

function Login() {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center space-y-4'>
            <img src={logo} className="w-8"/>
            <input type="text" placeholder="Email..." className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password..." className="input input-bordered w-full max-w-xs" />
            <div className='flex justify-center items-center space-x-4'>
                <Link to='/pricing' className='btn btn-primary'>Log In</Link>
                <Link to='/register' className='btn btn-ghost'>Dont have an account?</Link>
            </div>
        </div>
    )
}

export default Login
