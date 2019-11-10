import express from 'express'
import axios from 'axios'
import models from '../models/booking'
import moment from 'moment'

const router = express.Router()

router.get('/', async (req, res, next) => {
  const url = 'https://picsum.photos/v2/list'
  const response = await axios.get(url).then(res => res.data)
  const data = {
    title: 'Test By Sarawut Nawawisitkul',
    response,
  }
  res.render('index', data)
})

router.get('/booking', async (req, res, next) => {
  const check = models.checkAvailability('A101', moment('2019-09-28 13:00:00').toISOString() , moment('2019-09-28 13:00:00').toISOString())
  console.log(check)

  // res.render('booking', data)
})

module.exports = router
