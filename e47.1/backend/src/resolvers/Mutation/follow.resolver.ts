import { createGQLError } from "../../errors/utils";
import { ResolverFn, FollowInput } from "../../generated/graphql";

export const follow: ResolverFn<Promise<any>, FollowInput, any, any> = async function (_, { input }, { models, getAuthUser }) {
    const {_id } = input;
    const user = getAuthUser && await getAuthUser();
    
    if(!user) {
        throw createGQLError({
            code: "BAD_REQUEST",
            message: "Invalid credentials",
        })
    }

    try {

        const employee = await models.EmployeeModel.findOne({ _id });

        const alreadyFollowing = user.following.find((id: string) => id === _id);

        if(!employee || alreadyFollowing) {
            throw createGQLError({
                code: "BAD_REQUEST",
                message: "Something went wrong",
            });
        }
        
        const updatedUser = await models.UserModel.findOneAndUpdate(
            { _id: user._id },
            { $push: { following: _id } },
            { new: true },
        );

        return  updatedUser;

    } catch (error) {
        throw createGQLError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error following employee",
        });
    }

};

export default follow;