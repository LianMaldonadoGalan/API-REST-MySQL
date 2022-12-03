import jwt from 'jsonwebtoken'
import {JWTSECRET} from "../config.js";

export const logInController = async (req, res) => {
    const user = {
        id : 1,
        email : 'test@test.com',
        name : 'Gerard'
    }

    try {
        jwt.sign({user}, JWTSECRET, (err, token) => {
            return res.status(200).json(token);
        });
    } catch (error) {
        return res.status(500).json({
            message: "Unable to create token",
          });
    }
  };
