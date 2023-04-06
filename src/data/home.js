import sanityClient from '@sanity/client';
import configData from '../../config.js';
const client = sanityClient(configData.sanity)
export const getHomePageData = async () => {
     const query = '*[_type=="homePage"]{"videoUrl": video.asset->url, title}'
     let res = client.fetch(query, {}).then((data) => {
          return data
     })
     return await res;
}