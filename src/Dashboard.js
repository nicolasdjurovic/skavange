import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import map from '../src/assets/map1.png'
import '../src/tableFix.css'

// import cheerio from 'cheerio';
import axios from 'axios';
import { render } from '@testing-library/react';

function Dashboard() {

    const [requestKeywords, setRequestKeywords] = useState(null)
    const [requestExKeywords, setRequestExKeywords] = useState('')
    const [requestCategory, setRequestCategory] = useState('')

    const [responseOne, setResponseOne] = useState([])
    
    const [spinner, setSpinner] = useState(false);



    const handleApiRequest = () => {

        const optionsOne = {
            method: 'GET',
            url: 'http://localhost:8000/products',
            params: {
                query: requestKeywords,
            },
        };

        setSpinner(true);

        axios.request(optionsOne).then((response) => {
            setResponseOne(response.data)
            console.log(responseOne)
            setSpinner(false);
        }).catch((error) => {
            console.log(error)
        })

    }



    return (
        <div className=''>
            <Navbar />



            <div className='h-full bg-base-200 px-6 pt-20 pb-80 space-y-4'>

                <h1 className='text-xl font-bold'>Dashboard</h1>

                <i>To make the most out of this, search very specifically and make sure to use all the inputs provided!</i>

                <div className='flex flex-col items-center lg:justify-start lg:space-x-4 '>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Search for a product</span>
                        </label>
                        <input type="text" placeholder="iPhone X space gray..." class="input input-bordered" value={requestKeywords} onChange={(e) => setRequestKeywords(e.target.value)} /> 
                        {

                            spinner ? <button class="btn loading btn-primary w-full my-4">loading</button> :

                                <button type='submit' onClick={handleApiRequest} className='btn btn-primary w-full my-4'>Search</button>

                        }
                    </div>
                </div>

                {/* graph */}

                {/* table */}

                {responseOne.length > 0 &&

                    <div class="overflow-x-auto">
                        <table class="table w-full drop-shadow-lg">
                            <thead>
                                <tr>
                                    <th className='bg-base-100 block -z-10'>Name</th>
                                    <th className='bg-base-100'>Condition</th>
                                    <th className='bg-base-100'>Link Price</th>
                                    <th className='bg-base-100'>ASP</th>
                                    <th className='bg-base-100'>Profit</th>
                                    <th className='bg-base-100'></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    responseOne.map(item => {
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div class="avatar">
                                                            <div class="mask mask-squircle w-12 h-12">
                                                                <img src={item.image} alt="Product image" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p class="font-bold">{item.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="badge badge-ghost badge-sm">{item.subtitle}</span>
                                                </td>
                                                <td>
                                                    <p>{item.price}</p>
                                                </td>
                                                <td>
                                                    <p>$</p>
                                                </td>
                                                <td>
                                                    <p>$</p>
                                                    {/* {responseOne > 0 ?
                                                        <p className="text-accent">${responseOne - responseTwo.price.value}</p> :
                                                        <p className='text-red'>${responseOne - responseTwo.price.value}</p>
                                                    } */}

                                                </td>
                                                <th>
                                                    <a href={item.productLink} target="_blank" class="btn btn-primary">Link</a>
                                                </th>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    </div>
                }
            </div>

            <Footer />

        </div>
    )
}

export default Dashboard