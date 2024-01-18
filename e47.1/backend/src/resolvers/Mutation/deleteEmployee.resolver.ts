import { createGQLError } from "../../errors/utils";
import { AddEmployeeInput, ResolverFn } from "../../generated/graphql";

export const deleteEmployee: ResolverFn<any, AddEmployeeInput, any, any> = async function(_, { input }, {models, getAuthUser}){
    const user = getAuthUser();

    if(!user) {
        throw createGQLError({
            code: "BAD_REQUEST",
            message: "Invalid credentials",
        });
    };

    const { _id } = input;

    try {
        const employee = models.EmployeeModel.findOneAndDelete({ _id });
    
        return employee;
    } catch (error) {
        throw createGQLError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error deleting employee",
        });
    }
   
};

export default deleteEmployee;