import axios from "./axios"

const searchYTData = async (q,maxResults) => {
   return await axios.get("search", {
        params: {
          q,
          maxResults,
        },
      })
}

export default searchYTData