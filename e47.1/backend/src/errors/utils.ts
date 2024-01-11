import { GraphQLError} from "graphql";
import { ErrorObject } from "../types/general.types";

export function createGQLError(res: ErrorObject) {

    const extensions: any = {
        code: res.code,
        meta: res.details,
    }

    if(res.details) {
        extensions.details = res.details;
    }
    
    return new GraphQLError(res.message, { extensions });
};