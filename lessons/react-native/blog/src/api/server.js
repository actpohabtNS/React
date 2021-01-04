import axios from 'axios'

export default axios.create({
    baseURL: 'http://a1ae9059d6bb.ngrok.io' // has to be changed every 8 hours or whenever server reloads
})