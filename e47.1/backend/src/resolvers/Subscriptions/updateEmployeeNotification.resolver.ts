import { withFilter, ResolverFn, FilterFn } from "graphql-subscriptions";
import pubSub from "../../pubsub";


export const updateEmployeeNotification = {

    subscribe: withFilter(
        () => pubSub.asyncIterator("UPDATED_EMPLOYEE"), 
        async ({ updatedEmployee }, _, { getAuthUser }) => {
            const user = getAuthUser();

            const exists = user.following.some((employee: string) => employee === updatedEmployee._id );
            return exists;
        }
    ) as ResolverFn & { subscribe: ResolverFn, withFilter: (filterFn: FilterFn) => ResolverFn }
};

export default updateEmployeeNotification;