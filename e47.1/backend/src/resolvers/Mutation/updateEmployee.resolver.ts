import { createGQLError } from "../../errors/utils";
import { ResolverFn, UpdateEmployeeInput } from "../../generated/graphql";


export const updateEmployee: ResolverFn<Promise<any>, UpdateEmployeeInput, any, any> = async function( _, {input}, { models , getAuthUser}) {

    const user = getAuthUser && await getAuthUser();

    if(!user) {
        throw createGQLError({
            code: "BAD_REQUEST",
            message: "Invalid credentials",
        })
    }
    try {
        const { _id, skills, ...updateData } = input;

        const currentEmployee = await models.EmployeeModel.findOne({_id});

        if(!currentEmployee) {
            throw createGQLError({
                code: "NOT_FOUND",
                message: "Employee not found",
            });
        }
      
        const updatedEmployee = await models.EmployeeModel.findOneAndUpdate(
            {_id},
            {
                ...updateData,
                skills: [{ skill: skills }],
            },
            { new : true },
            );

        //TODO: The subscription to send that this employee if a user follows this employee

        return updatedEmployee;
    } catch(error) {
        throw createGQLError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error updating employee",
        });
    }
};

export default updateEmployee;