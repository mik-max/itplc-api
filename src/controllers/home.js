import { getHomePageData } from "../data/home.js";

export const getHomePage = async (req, res) => {
     try {
          let data = await getHomePageData();
          res.status(200).send({'status': 'Ok', data: data, message: 'record fetched'})
     } catch (error) {
          res.status(500).send({ status: 'Failed', data:null, message: error.message})
     }   
}