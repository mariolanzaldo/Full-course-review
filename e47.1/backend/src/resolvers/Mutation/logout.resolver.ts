import { ResolverFn } from "../../generated/graphql";
import { cookieInput } from "../../types/user.types";


export const logout: ResolverFn<any, cookieInput, any, any> = async function (_, {input }, { res }) {
    const { name } = input;

        const options = {
            maxAge: 1e9,
            httpOnly: true,
            sameSite: "Lax",
        };

        res.clearCookie(name, options);

        return {
            success: true,
        };
};

export default logout;