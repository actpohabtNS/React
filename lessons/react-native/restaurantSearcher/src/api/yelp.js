import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization:
            'Bearer G4S3if-qpbY4In5yrwRu7AEdiFV-acmmcB2t5mIlPcGOa0Idu8Xr4lEbdvgRb2BJHI6mUbRhzNPeN0avE-fej-yeH3ZecuWiXy0T1ZKkApq1-Ks7eK6kO92IAx_wX3Yx'
    }
})