import express from 'express'
import axios from 'axios'
const router = express.Router()
 
router.get('/',async (req, res, next) => {
  const url = 'https://picsum.photos/v2/list'
  const response = await axios.get(url).then(res => res.data)
  
  const data = { 
    title: 'Test By Sarawut Nawawisitkul',
    response,
  }
    res.render('index', data)
})
 
module.exports = router