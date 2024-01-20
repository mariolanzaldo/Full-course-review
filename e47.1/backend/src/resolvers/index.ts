import * as Query from "./Query/index";
import * as Mutation from "./Mutation/index";
// import * as Subscription from "./Subscriptions/index";
import subs from "./Subscriptions/index";

const resolvers = {
    Query,
    Mutation,
    Subscription: subs,
};
  
  export default resolvers;