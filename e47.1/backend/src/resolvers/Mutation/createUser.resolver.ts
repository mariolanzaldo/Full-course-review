import { ResolverFn } from "../../generated/graphql";
import { Void } from "../../utils/gql.types.utils";
import { createUserInput } from "../../types/index";

export const createUser: ResolverFn<any, createUserInput, any, any>= async (_, { input }, { models }) => {
    const { username, password } = input;

    const user = new models.UserModel({
        username,
        password,
        following: [],
    });

    await user.save();
    return Void;
};

export default createUser;