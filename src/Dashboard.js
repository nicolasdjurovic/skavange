import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

// import cheerio from 'cheerio';
import axios from 'axios';
import { render } from '@testing-library/react';


function Dashboard() {

    const [requestKeywords, setRequestKeywords] = useState('')
    const [requestExKeywords, setRequestExKeywords] = useState('')
    const [requestCategory, setRequestCategory] = useState()
    
    var responseOne = []
    var responseTwo = []
    

    function handleApiRequest() {

        // const optionsOne = {
        //     method: 'POST',
        //     url: 'https://ebay-average-selling-price.p.rapidapi.com/findCompletedItems',
        //     headers: {
        //         'content-type': 'application/json',
        //         'X-RapidAPI-Host': 'ebay-average-selling-price.p.rapidapi.com',
        //         'X-RapidAPI-Key': '5a09c23c28msh85582a9fd572b75p17b550jsn2d817f0a39d5'
        //     },
        //     data: {
        //         keywords: requestKeywords,
        //         excluded_keywords: requestExKeywords,
        //         category_id: requestCategory,
        //         max_search_results: 240,
        //     }
        // };

        // axios.request(optionsOne).then(function (oneResponse) {
        //     console.log(oneResponse);

        // }).catch(function (error) {
        //     console.error(error);
        // });

        const optionsTwo = {
            method: 'POST',
            url: 'https://ebay-scraper.p.rapidapi.com/product-search',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': '5a09c23c28msh85582a9fd572b75p17b550jsn2d817f0a39d5',
                'X-RapidAPI-Host': 'ebay-scraper.p.rapidapi.com'
            },
            data: {
                keyword: requestKeywords,
                page: 1
            }
        };


        axios.request(optionsTwo).then(function (twoResponse) {
            responseTwo = twoResponse

        }).catch(function (error) {
            console.error(error);
        });



    }

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
                        <input type="text" placeholder="iPhone X space gray..." class="input input-bordered" value={requestKeywords} onChange={(e) => setRequestKeywords(e.target.value)} />
                        <label class="label">
                            <span class="label-text">Exclude keywords</span>
                        </label>
                        <input type="text" placeholder="Locked cracked case box read glass protector case charger..." class="input input-bordered" value={requestExKeywords} onChange={(e) => setRequestExKeywords(e.target.value)} />
                        <label class="label">
                            <span class="label-text">Choose a category</span>
                        </label>
                        <select class="select select-bordered" onChange={(e) => setRequestCategory(e.target.value)}>
                            <option value={20081}>Antiques #20081</option>
                            <option value={550}>Art #550</option>
                            <option value={2984}>Baby #2984</option>
                            <option value={267}>Books & Magazines #267</option>
                            <option value={12576}>Business & Industrial #12576</option>
                            <option value={625}>Cameras & Photo #625</option>
                            <option value={15032}>Cell Phones & Accessories #15032</option>
                            <option value={11450}>Clothing, Shoes & Accessories #11450</option>
                            <option value={11116}>Coins & Paper Money #11116</option>
                            <option value={1}>Collectibles #1</option>
                            <option value={58058}>Computers/Tablets & Networking #58058</option>
                            <option value={293}>Consumer Electronics #293</option>
                            <option value={14339}>Crafts #14339</option>
                            <option value={237}>Dolls & Bears #237</option>
                            <option value={45100}>Entertainment Memorabilia #45100</option>
                            <option value={99}>Everything Else #99</option>
                            <option value={172008}>Gift Cards & Coupons #172008</option>
                            <option value={26395}>Health & Beauty #26395</option>
                            <option value={11700}>Home & Garden #11700</option>
                            <option value={281}>Jewelry & Watches #281</option>
                            <option value={11232}>Movies & TV #11232</option>
                            <option value={11233}>Music #11233</option>
                            <option value={619}>Musical Instruments & Gear #619</option>
                            <option value={1281}>Pet Supplies #1281</option>
                            <option value={870}>Pottery & Glass #870</option>
                            <option value={10542}>Real Estate #10542</option>
                            <option value={316}>Specialty Services #316</option>
                            <option value={888}>Sporting Goods #888</option>
                            <option value={64482}>Sports Mem, Cards & Fan Shop #64482</option>
                            <option value={260}>Stamps #260</option>
                            <option value={1305}>Tickets & Experiences #1305</option>
                            <option value={220}>Toys & Hobbies #220</option>
                            <option value={3252}>Travel #3252</option>
                            <option value={1249}>Video Games & Consoles #1249</option>
                        </select>
                    </div>

                </div>

                <button type='submit' onClick={handleApiRequest} className='btn btn-primary w-full'>Search</button>

                {/* graph */}

                {/* table */}

                {responseTwo > 0 &&

                    <div class="overflow-x-auto">
                        <table class="table w-full">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Condition</th>
                                    <th>Link Price</th>
                                    <th>ASP</th>
                                    <th>Profit</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    responseTwo.data.searched_items.map((item, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div>
                                                            <p class="font-bold">{item.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="badge badge-ghost badge-sm">{item.condition}</span>
                                                </td>
                                                <td>
                                                    <p>${item.price.value}</p>
                                                </td>
                                                <td>
                                                    <p>$140</p>
                                                </td>
                                                <td>
                                                    <p className='text-accent'>$40</p>
                                                </td>
                                                <th>
                                                    <a href={item.url} target="_blank" class="btn btn-primary">Link</a>
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