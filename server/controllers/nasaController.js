const axios = require('axios')
const Nasa = require('../models/nasa')

class NasaController {
  static findAll(req, res) {
    // console.log(req.user)
    Nasa
    .find({})
    .then(apod => {
      // console.log(apod)
      res.status(200).json(apod);
    })
    .catch(err => {
      res.status(500).json(err)
    })
  }

  static create(req, res) {
    // console.log('masuk controller', req.body.date.slice(0,10))
    let date = req.body.date.slice(0,10)
    axios({
      method: 'GET',
      url: `https://api.nasa.gov/planetary/apod?&date=${date}&api_key=${process.env.API_KEY}`
    })
    .then(({data}) => {
      let objData = { 
        date: data.date,
        title: data.title,
        desc: data.explanation,
        url: data.url,
        mediaType: data.media_type
      }
      // console.log(objData)
      return Nasa.create(objData)
    })
    .then(apodFile => {
      console.log(apodFile)
      // res.status(201).json(apodFile)
    })
    .catch(err => {
      console.log(err)
    })
  }
}

module.exports = NasaController