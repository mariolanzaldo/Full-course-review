import { ResolverFn } from "../../generated/graphql";
import { loginInput } from "../../types/index";
import {createGQLError} from "../../errors/utils";


export const login: ResolverFn<any, loginInput, any, any>= async (_, { input }, { models, res }) => {
    const { username, password } = input;
    let user;
    try {

        user = await models.UserModel.findOne({ username });

        const isValidPassword = await user.isValidPassword(password);
        
        if (!isValidPassword || !user) {
            throw createGQLError({
                code: "FORBIDDEN",
                message: "Invalid password or username",
            });
        }
        const token = user.generateToken();
        // console.log(token);

        const cookies = {
            user: [
                "token",
                token,
                {
                    httpOnly: true,
                    secure: true,
                    sameSite: "Lax",
                }
            ]

        };

        res.cookie(...cookies.user);
    
        return user;
    } catch(error) {
        // console.log(error);
        throw createGQLError({
            code: "FORBIDDEN",
            message: "Invalid password or username",
        });

    }
};

export default login;