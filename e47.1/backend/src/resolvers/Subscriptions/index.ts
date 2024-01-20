// export * from "./updateEmployeeNotification.resolver";

import { withFilter, ResolverFn, FilterFn } from "graphql-subscriptions";
import pubSub from "../../pubsub";
import updateEmployeeNotification from "./updateEmployeeNotification.resolver";
export const subs = {
 updatedEmployee: updateEmployeeNotification,
};

// const subs = {

//     updatedEmployee: {
//         subscribe: withFilter(
//             () => pubSub.asyncIterator("UPDATED_EMPLOYEE"), 
//             (payload: any, variables: any) => {
//                 console.log("enters");
//                 return true;
//             }
//         ) as ResolverFn & { subscribe: ResolverFn, withFilter: (filterFn: FilterFn) => ResolverFn }
//     }
// };

export default subs;