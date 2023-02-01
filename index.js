//const PORT = 5000
const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')
//const app = express()


const product = {
    name : '',
    price : '',
    link : '',
}


const url = 'https://www.amazon.in/Apple-iPhone-13-128GB-Midnight/dp/B09G9HD6PD/ref=sr_1_3?crid=3VFJ9T7QN3WIV&keywords=iphone&qid=1675278536&sprefix=iphone%2Caps%2C194&sr=8-3&th=1'
const handle = setInterval(scrape,60000)
async function scrape(){
    const {data} = await axios.get(url)
    
    const $ = cheerio.load(data);
    product.name = $('div#titleSection').find('h1 span#productTitle').text()
    product.price = $('div#corePriceDisplay_desktop_feature_div').find('span .a-price-whole').text().replace(/[,.]/g,'')
    product.link = url
    const priceinte = parseInt(product.price)
    console.log(priceinte +":"+ product.name + product.link)
}
scrape();
//app.listen(PORT, () =>  console.log(`listening to ${PORT}...`))
