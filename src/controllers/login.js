import configData from "../../config.js";
import { createUserData } from "../data/login.js";
export const login = async (req, res) => {
     try {
          if(req.body.code && req.body.church){
               if(configData.loginCodes.includes(req.body.code)){
                    let result =await createUserData(req.body);
                    res.status(200).send({status: 'Ok', data: result, message: 'Login Successful'})
               }else{
                    res.status(200).send({status: 'Failed', data: null, message: 'Password is incorrect'})
               }
          }else{
               res.status(400).send({ status: 'Failed', data:null, message:"secrete code are church are required"})
          }
     } catch (error) {
          res.status(500).send({ status: 'Failed', data:null, message: error.message})
     }
}