// import { MyContext } from "../..";
import { createGQLError } from "../../errors/utils";
import { ResolverFn, AddEmployeeInput } from "../../generated/graphql";

export const addEmployee: ResolverFn<Promise<any>, AddEmployeeInput, any, any> = async function (_, { input }, { models, getAuthUser }) {
    const user = await getAuthUser();

    if(!user) {
        throw createGQLError({
            code: "BAD_REQUEST",
            message: "Invalid credentials",
        });
    };

    const { name, location_city, location_state, exp, skills,
        salary, category, subcategory, work_authorization } = input;

    const transformedSkills = { skill: skills };

    try {
        const employee = new models.EmployeeModel({
            name,
            location_city, 
            location_state, 
            exp, 
            skills: transformedSkills, 
            salary, 
            category, 
            subcategory, 
            work_authorization,
        });
    
        await employee.save();
    
        return employee;
    } catch (error) {
        throw createGQLError({
            code: "INTERNAL_SERVER_ERROR",
            message: "Error deleting employee",
        });
    }

};

export default addEmployee;