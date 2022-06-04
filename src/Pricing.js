import { Link } from 'react-router-dom';
import { BsThreeDots, BsPerson } from '../node_modules/react-icons/bs'
import { MdOutlineCancel, MdOutlineCheckCircle } from '../node_modules/react-icons/md'

import logo from '../src/assets/logo.png'
import potion from '../src/assets/potion.png'

import Footer from './Footer';
import Navbar from './Navbar';

function Pricing() {
    return (
        <div className="">


            <Navbar />

            <div className='bg-base-200  pt-20 pb-20 px-6'>
                <h1 className='text-xl color-primary font-bold pb-4'>Pricing</h1>

                <div className='grid gap-6 grid-rows-3 lg:grid-cols-3 '>
                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Free <span className='font-normal'>- $0</span></h2>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCheckCircle className='h-6 w-6' />
                                <p className='pl-2'>5 results a day</p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCancel className='h-6 w-6 text-error' />
                                <p className='pl-2'>Pay one time</p>
                            </div>

                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Basic <span className='font-normal'>- $5/Month</span></h2>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCheckCircle className='h-6 w-6 ' />
                                <p className='pl-2'>50 results a day</p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCancel className='h-6 w-6 text-error' />
                                <p className='pl-2'>Pay one time</p>
                            </div>

                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                    <div className="card w-full bg-base-100 shadow-xl rounded-tl-none rounded-tr-none border-t-8 border-primary">
                        <div className="card-body">
                            <h2 className="card-title font-bold">Pro <span className='font-normal'>- $100</span></h2>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCheckCircle className='h-6 w-6' />
                                <p className='pl-2'>100 results a day</p>
                            </div>

                            <div className='flex justify-center items-center'>
                                <MdOutlineCheckCircle className='h-6 w-6' />
                                <p className='pl-2'>Pay one time</p>
                            </div>

                            <div className="card-actions justify-start">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>


    );
}

export default Pricing;
