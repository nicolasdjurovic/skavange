import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

// import cheerio from 'cheerio';
import axios from 'axios';

const cheerio = require('cheerio')

var siteUrl = 'https://www.ebay.com/sch/i.html?_from=R40&_nkw=jordan%201%20low%20shadow%20new%20size%2010&_sacat=11450&LH_TitleDesc=0&rt=nc'

axios(siteUrl)
.then(response => {
    const data = response.data
    const $ = cheerio.load(data)
    const articles = []
    
    $('.s-item s-item__pl-on-bottom', data).each(function(){
        const title = $(this).find('.s-item__title').text()

        articles.push({
            title,
        })
    })

    console.log(articles)
}).catch(err => console.log(err))

function Dashboard() {

    return (
        <div className=''>
            <Navbar />

            <div className='h-screen bg-base-200 px-6 py-20 space-y-4'>

                <h1 className='text-xl font-bold'>Dashboard</h1>

                <i>To make the most out of this, search very specifically and make sure to use all the inputs provided!</i>

                <div className='flex flex-col lg:flex-row items-center lg:justify-start lg:space-x-4'>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Search for a product</span>
                        </label>
                        <input type="text" placeholder="Jordan 1 low shadow size 10 new..." class="input input-bordered" />
                    </div>

                </div>

                <button type='submit' className='btn btn-primary w-full'>Search</button>

                <div class="overflow-x-auto">
                    <table class="table w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Country</th>
                                <th>Condition</th>
                                <th>Link Price</th>
                                <th>ASP</th>
                                <th>Profit</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="flex items-center space-x-3">
                                        <div class="avatar">
                                            <div class="mask mask-circle w-16 h-16">
                                                <img src='' />
                                            </div>
                                        </div>
                                        <div>
                                            <p class="font-bold">Jordan 1 Retro High University Blue</p>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <p>United States</p>
                                </td>
                                <td>
                                    <span class="badge badge-ghost badge-sm">New</span>
                                </td>
                                <td>
                                    <p>$100</p>
                                </td>
                                <td>
                                    <p>$140</p>
                                </td>
                                <td>
                                    <p className='text-accent'>$40</p>
                                </td>
                                <th>
                                    <button class="btn btn-primary">Link</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>


            <Footer />

        </div>
    )
}

export default Dashboard