import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler = (req:Request, res:Response)=>{
  
const token = jwt.sign({
    
        password:'password',
        email:'un email'
      
  
},'secret',{expiresIn:10})

return res.json({
    token
})


}

export const profileHandler = (req:Request,res:Response)=>{

    return res.json({
        profile:req.user,
        message:"profile data"
    })
}