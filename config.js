import 'dotenv/config'
const {

     SANITY_DATASET,
     SANITY_PROJECT_ID,
     SANITY_AUTH_TOKEN,
     NODE_ENV,

} = process.env;


let configData = {

     sanity:{
          projectId: SANITY_PROJECT_ID,
          dataset: SANITY_DATASET,
          apiVersion: '2023-02-12',
          token: SANITY_AUTH_TOKEN,
          useCdn: NODE_ENV === 'production'
     },

     loginCodes:[
          "ITPLC8H2B", "ITPLC3IDM", "ITPLC1F26", "ITPLC7LXM", "ITPLC8RQG", 
          "ITPLCZLMO", "ITPLCAV0T", "ITPLC2UK4", "ITPLCKB1E", "ITPLCG9YX", 
          "ITPLC3I82", "ITPLC6NZL", "ITPLC2TJ3", "ITPLCWKP3", "ITPLCHFUV", 
          "ITPLC6FZQ", "ITPLCRV2W", "ITPLCU1N3", "ITPLCBE0J", "ITPLC7CZL", 
          "ITPLCWHY4", "ITPLCNV75", "ITPLCOSFJ", "ITPLCQ9YI", "ITPLCGL4R", 
          "ITPLC5ZD2", "ITPLCQJ0B", "ITPLC07P6", "ITPLCP1M2", "ITPLCZ5RV", 
          "ITPLCBL9A", "ITPLCQYJU", "ITPLCUUZF", "ITPLCG8LK", "ITPLCOVTD", 
          "ITPLC8VU2", "ITPLC01DA", "ITPLCKGTX", "ITPLCPXH7", "ITPLCVYRP", 
          "ITPLCXZS7", "ITPLC38HN", "ITPLCO98K", "ITPLCDNV9", "ITPLC9R5J", 
          "ITPLCN1G9", "ITPLCR9V6", "ITPLCJ8A3", "ITPLCULBW", "ITPLCJ3XP"
     ]
        
}
export default configData;
