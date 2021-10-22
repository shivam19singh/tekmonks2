const rp = require('request-promise');
const url = process.env.API;
const cheerio = require('cheerio');

// //get news form times API => /getTimeStories
exports.getStories= async(req,res,next)=>{
    rp(url)
  .then(function(html){
      const $= cheerio.load(html)
      const data = [];

    for (let i = 0; i < 5; i++){
     data.push({
           "link":'https://time.com' + $('section[class="homepage-module latest"] > ol > li > article > div > h2 > a')[i].attribs.href,
           "title": $('section[class="homepage-module latest"] > ol > li > article > div > h2 > a')[i].children[0].data,
       }) 
    }
    console.log(data)
    res.send(data)
  })
  .catch(function(err){
    console.log(err);
  });
}