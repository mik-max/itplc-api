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

     loginCodes:['ITPLC01MX','ITPLC02JP', 'ITPLC03WR', 'ITPLC04TM', 'ITPLC05PO', 'ITPLC06ZI', 'ITPLC07NB', 'ITPLC08HS', 'ITPLC09LD', 'ITPLC10DF','ITPLC11VR','ITPLC12KL','ITPLC13AK','ITPLC14JB','ITPLC15QZ','ITPLC16LN','ITPLC17WC','ITPLC18FS', 'ITPLC19YL', 'ITPLC20DM']
}
export default configData;
