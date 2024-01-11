import passport from "passport";
import { Strategy as PassportStrategy } from "passport-local";
import passportJWT, { ExtractJwt, VerifiedCallback  } from "passport-jwt";
import UserModel from "../../models/User";
import { Callback } from "mongoose";

const JWTStrategy = passportJWT.Strategy;

const SECRET_TOKEN = process.env.SECRET_TOKEN;

passport.use(
    new JWTStrategy({
        secretOrKey: SECRET_TOKEN,
        jwtFromRequest: ExtractJwt.fromBodyField('secret_token'),
    },
    async (payload: any, done: VerifiedCallback) => {
        try {
            const user = await UserModel.findOne({ username: payload.user.username });

            if(!user) return done(null, false, { message: "User not found"});
            return done(null, user);
        } catch (error) {
            done(error);
        }
    })
);

// function jwtMiddleware(req: Request, res: Response, next: Callback) {
//      try {

//      } catch (error) {

//      }
// };