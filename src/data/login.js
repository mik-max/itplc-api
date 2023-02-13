import sanityClient from '@sanity/client';
import configData from '../../config.js';
const client = sanityClient(configData.sanity)

export const createUserData = async (userData) => {
     
     try {
          let res = client.createIfNotExists({
               _type: 'userLogins',
               _id: userData.church.replace(/ /g, "")+userData.code ,
               church: userData.church,
               code:userData.code,
          })
          return await res;
     } catch (error) {
          return error.message
     }
}