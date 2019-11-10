import { filter, isEmpty } from 'lodash'
import moment from 'moment'
import fs from 'fs'
import path from 'path'

const jsonFile = path.join(__dirname, '../../public/json/booking-data.json')
const rooms = JSON.parse(fs.readFileSync(jsonFile, 'utf8'))

const checkAvailability = (roomId, startTime, endTime) => {
  const roomIds = filter(rooms, { roomId })

  // in time have booking room
  const checkAvaliable = roomIds.map(room => {
    const start = moment(room.start).toISOString()
    const end = moment(room.end).toISOString()
    if ((start >= startTime && start >= endTime) || (end >= startTime && end >= endTime)) {
      return room
    }
  })
  console.log(checkAvaliable);
  
  return isEmpty(checkAvaliable) ? false : true
}

const getBookingsForWeek = (roomId, weekNo) => {
  //  return [...array of bookings]
}

export default {
  checkAvailability,
  getBookingsForWeek,
}
