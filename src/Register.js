import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../src/assets/logo.png'

function Register() {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center space-y-4'>
            <img src={logo} className="w-8" />
            <input type="text" placeholder="Email..." className="input input-bordered w-full max-w-xs" />
            <input type="password" placeholder="Password..." className="input input-bordered w-full max-w-xs" />
            <div className='flex justify-between items-center space-x-4'>
                <Link to='/pricing' className='btn btn-primary'>Register</Link>
                <Link to='/login' className='btn btn-ghost'>Already have an account?</Link>
            </div>
        </div>
    )
}

export default Register
