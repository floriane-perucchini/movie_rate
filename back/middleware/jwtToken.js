import jwt from "jsonwebtoken";
import "dotenv/config";


const jwtMiddleware = {
  generateAccessToken : function (user) {
      const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET)

      return accessToken;
  },
  authenticateToken : function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token === null) {
      return res.sendStatus(401);
    }

    jwtToken.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (error) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    })
  }
}

export default jwtMiddleware;