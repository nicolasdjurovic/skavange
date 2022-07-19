import React, { useState } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import '../src/tableFix.css'

// import cheerio from 'cheerio';
import axios from 'axios';
const brain = require('brain.js')

function Dashboard() {

    const [requestKeywords, setRequestKeywords] = useState(null)

    const [responseOne, setResponseOne] = useState([])

    const [spinner, setSpinner] = useState(false);

    const [priceAi, setPriceAi] = useState([])

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

        var net2 = new brain.recurrent.LSTMTimeStep();

        const normalise = (x) => x / 10;
        const denormalise = (x) => x * 10;

        const training = responseOne.map(item => {
            return item.price
        })

        const normalisedTrainingData = training.map(normalise);


        console.log('Input array', normalisedTrainingData);

        net2.train([
            normalisedTrainingData
        ]);

        const output2 = net2.forecast(normalisedTrainingData, 3);

        const outputRun2 = net2.run(normalisedTrainingData);

        console.log('2) Forecast: ', output2.map(denormalise));

        console.log('2) Run: ', outputRun2 * 10);
        const finalOutput = outputRun2 * 10

        setPriceAi(finalOutput)

    }

    return (

        <div className=''>

            <Navbar />

            <div className='h-full bg-base-200 px-6 pt-20 pb-80 space-y-4'>


                <h1 className='text-xl font-bold'>Dashboard</h1>

                {/* <i>To make the most out of this, search very specifically and make sure to use all the inputs provided!</i> */}

                <div className='flex flex-col items-center lg:justify-start lg:space-x-4 '>

                    <div class="form-control w-full">
                        <label class="label">
                            <span class="label-text">Search for a product</span>
                        </label>
                        <input type="text" placeholder="iPhone X Space Gray Unlocked -box -read -case -cover -screen -protector..." class="input input-bordered" value={requestKeywords} onChange={(e) => setRequestKeywords(e.target.value)} />
                        {

                            spinner ? <button class="btn loading btn-primary w-full my-4">Loading</button> :

                                <button type='submit' onClick={handleApiRequest} className='btn btn-primary w-full my-4'>Search</button>

                        }
                    </div>
                </div>

                {/* graph */}

                Predicted Price: ${priceAi}

                {/* table */}

                {responseOne.length > 0 &&

                    <div class="overflow-x-auto">
                        <table class="table w-full drop-shadow-lg">
                            <thead>
                                <tr>
                                    <th className='bg-base-100 block -z-10'>Name</th>
                                    <th className='bg-base-100'>Rating</th>
                                    <th className='bg-base-100'>Link Price</th>
                                    <th className='bg-base-100'></th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    responseOne.map(item => {
                                        return (
                                            <tr key={item.ASIN}>
                                                <td>
                                                    <div class="flex items-center space-x-3">
                                                        <div class="avatar">
                                                            <div class="mask mask-squircle w-12 h-12">
                                                                <img src={item.imageUrl} alt="Product image" />
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p class="font-bold">{item.title}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span class="badge badge-ghost badge-sm">{item.rating}</span>
                                                </td>
                                                <td>
                                                    <p>${item.price}</p>
                                                </td>
                                                <th>
                                                    <a href={item.detailPageURL} target="_blank" class="btn btn-primary">Link</a>
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
            <div className='h-screen bg-base-200'></div>
            <Footer />

        </div>
    )
}

export default Dashboard