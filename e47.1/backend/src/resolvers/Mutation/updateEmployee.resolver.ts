import { createGQLError } from "../../errors/utils";
import { ResolverFn, UpdateEmployeeInput,Employee } from "../../generated/graphql";
// import { MyContext } from "../..";

export const updateEmployee: ResolverFn<Promise<any>, UpdateEmployeeInput, any, any> = async function( _, {input}, { models , getAuthUser}) {

    const user = getAuthUser && await getAuthUser();

    if(!user) {
        throw createGQLError({
            code: "BAD_REQUEST",
            message: "Invalid credentials",
        })
    }
    try {

        return "Hi!"
    } catch(error) {
        throw createGQLError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error deleting employee",
        });
    }
};

export default updateEmployee;