import axios from "axios";

export default axios.create({
  baseUrl: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID i70Z9do9qvoFwfjo8bkey2ORemdk6MGaiXtZQXxBIzo",
  },
});
