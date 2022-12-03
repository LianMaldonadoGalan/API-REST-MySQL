import jwt from 'jsonwebtoken'
import { JWTSECRET } from '../config.js';

export const verifyToken = (req, res, next) => {
    if(!req.headers.authorization) {
        return res.status(401).json({ msg: 'Unauthorized' });
    }
    const token = req.headers.authorization.split(" ")[1];
    if(!token) {
        return res.status(401).json({ error: 'Token is required' });
    }
    try{
        jwt.verify(token, JWTSECRET, (err) => {
            if(err) {
                return res.status(401).json({ error: 'Token is invalid' });
            }
        });
        // if (payloadDecoded.exp <= moment().unix()) {
        //     return res.status(401).send({ message: "Token has expired" });
        //   }
        return next();
    }catch(err){
        return res.status(500).json({ error: err });
    }
};