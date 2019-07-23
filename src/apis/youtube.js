import axios from "axios";

// const KEY = 'AIzaSyA5RB6Wh_YU98tUDSK2LC9tNFcdn4l1Vjw';
const KEY = "AIzaSyBarBDkRUuqUSBoZcvbZrVfxfFKYBOqdxs";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 8,
    key: KEY
  }
});
