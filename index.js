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
    // const optionsOne = {
    //     method: 'GET',
    //     url: 'https://ebay-products-search-scraper.p.rapidapi.com/products',
    //     params: {
    //         query: passedKeyword,
    //         page: '1',
    //         Item_Location: 'us_only'
    //     },
    //     headers: {
    //         'X-RapidAPI-Key': process.env.RAPID_API_KEY,
    //         'X-RapidAPI-Host': 'ebay-products-search-scraper.p.rapidapi.com'
    //     }
    // };

    const options = {
        method: 'GET',
        url: 'https://amazon-price1.p.rapidapi.com/search',
        params: {keywords: passedKeyword, marketplace: 'US'},
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'amazon-price1.p.rapidapi.com'
        }
      };

    axios.request(options).then((response) => {
        
        

        let outputData = response.data.map(item => {
            var num = item.price
            var s2 = num.replace("$", "")
            var s3 = parseFloat(s2)
            item.price = s3
            return{
                'price': s3,
            }
        });


        console.log(outputData);
        console.log(response.data)
        res.json(response.data)

    }).catch((error) => {
        console.log(error)
    })

})