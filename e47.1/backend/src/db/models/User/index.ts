import  mongoose, { Document, Schema} from "mongoose";
import validatorLib from "validator";
import bcrypt from "bcrypt";
// import passportLocalMongoose from "passport-local";

export interface User extends Document{
    username: string;
    password: string;
    following: string[];
    isValidPassword(password: string): Promise<boolean>;
}

const userSchema = new Schema<User>({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    following: [
        {
            type: String,
            default: [],
            required: false,
        }
    ],
});

userSchema.pre("save", async function (next) {
    const user = this as User;
    const hashed = await bcrypt.hash(user.password, 10);
    user.password = hashed;
    next();
});

userSchema.methods.isValidPassword = async function(password: string) {
    const user = this as User;
    const compare = await bcrypt.compare(password, user.password);
    return compare;
};

export const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;