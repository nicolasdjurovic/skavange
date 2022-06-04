import React from 'react'
import { BiSun, BiLogOut } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { FiSettings } from 'react-icons/fi'
import { GoDashboard } from 'react-icons/go'

import { Link } from 'react-router-dom'


import useLocalStorage from 'use-local-storage'

import logo from '../src/assets/logo.png'



function Navbar() {

    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme)
    }

    document.body.setAttribute('data-theme', `${theme}`)

    
    return (

        <div className="navbar fixed bg-base-100 px-6 z-50">
            <div className="flex-1">
                <Link to="/" className="btn btn-ghost normal-case text-xl flex justify-center items-center"><img src={logo} className='h-6 pr-2' />Skavange</Link>
            </div>
            <div className="flex-none">
                <Link to='/pricing' className='btn btn-ghost'>PRICING</Link>

                <button id='darkmode' className='btn btn-square btn-ghost' onClick={switchTheme} ><BiSun className='w-6 h-6' /></button>

                <div className='dropdown dropdown-end'>
                    <label tabIndex='0' className='btn btn-square btn-ghost'><BsPerson className='w-6 h-6' /></label>
                    <ul tabIndex='0' className='dropdown-content menu p-2 shadow bg-base-100 rounded-box'>
                        <li className=''><a className='btn-disabled'>Email</a></li>
                        <li className=''><a><GoDashboard className='h-4 w-4' />Dashboard</a></li>
                        <li className=''><a><FiSettings className='h-4 w-4' />Settings</a></li>

                        {/* if signed in */}
                        <li className=''><a><BiLogOut className='h-4 w-4' />Log Out</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar