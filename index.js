const express = require('express')
const cors = require('cors')
const axios = require('axios')
require('dotenv').config()

const app = express()

app.use(cors())

app.listen(8000, () => console.log('Server is running on port 8000'))

app.get('/products', (req, res) => {
    const passedKeyword = req.query.query
    console.log(req)
    const optionsOne = {
        method: 'GET',
        url: 'https://ebay-products-search-scraper.p.rapidapi.com/products',
        params: {
            query: passedKeyword,
            page: '1',
            Item_Location: 'us_only'
        },
        headers: {
            'X-RapidAPI-Key': process.env.RAPID_API_KEY,
            'X-RapidAPI-Host': 'ebay-products-search-scraper.p.rapidapi.com'
        }
    };

    axios.request(optionsOne).then((response) => {


        response.data.products.map(item => {
            var rmDollar = parseFloat(item.price.replace(/$/g, ""));
            var rmString = parseInt(rmDollar)
            res.json(rmString)
        });

        console.log(response.data.products)
        res.json(response.data.products)

    }).catch((error) => {
        console.log(error)
    })

})