import axios from 'axios';

const searchImages=async(term)=>{
    const response=await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization:'Client-ID gNiHV5IkKhuWib2l4CcBu0eRrxTdbFZKtJ5agU6EbVg'
      },
      params:{
        query:term
      }
    });
    // debugger;
    return response.data.results;
};
export default searchImages;