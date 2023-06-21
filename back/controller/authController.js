import userDatamapper from "../datamapper/userDatamapper.js";
import "dotenv/config";
import bcrypt from "bcrypt";
import jwtMiddleware from "../middleware/jwtToken.js";

const authController = {
  signup: async function (request, response, next) {
    const user = request.body;
    try{
      const verifyUser = await userDatamapper.getOne(user.email.toLowerCase());
      if(verifyUser?.email === user?.email){
        return next(new Error("Email already exists"));
      }

      user.password = await bcrypt.hash(user.password, 10);

      const createUser = await userDatamapper.create(user);
      if(!createUser){
        return next(new Error("Error while creating user"));
      }

      response.status(201).json({
        message: "User created successfully",
        user: createUser
      });
    } catch(error){
      console.log(error);
      next(error);
    }
  },

  login: async function (request, response, next) {
    const user = request.body;
    try{
      const checkUser = await userDatamapper.getOne(user.email.toLowerCase());
      if(!user){
        return next(new Error("Email or password is incorrect"));
      }

      if(!user.password){
        return next(new Error("Email or password is incorrect"));
      }

      const checkPassword = await bcrypt.compare(user.password, checkUser.password);
      if(!checkPassword){
        return next(new Error("Email or password is incorrect"));
      }

      //JWT
      const access_token = jwtMiddleware.generateAccessToken();

      const connectedUser = await userDatamapper.updateUserToken({
        email: user.email.toLowerCase(),
        token: access_token
      })

      return (
        response.status(200).json({
          message: "User logged in successfully",
          user: connectedUser
        })
      )

    }catch(error){
      console.log(error);
      next(error);
    }
  }
}

export default authController;