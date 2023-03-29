import axios from "axios"

const KEY = 'AIzaSyD6jaTi143GXz_XCSwF0Pdj2wOFs6nTznA'
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        key: KEY
    }
})