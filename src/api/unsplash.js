import axios from "axios";

const access_key = "5ZwvvzSVwmrK0JKmkQy6fqJe_19mbF1Bq90RxzHMR8s";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    'Authorization': `Client-ID ${access_key}`
  }
})