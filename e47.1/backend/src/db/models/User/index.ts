import  mongoose, { Document, Schema} from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

userSchema.methods.generateToken = function () {
    try {
        const user = this;
        const payload = { _id: user.id};
        const secret = process.env.SECRET_TOKEN;
 
        const options = { expiresIn: "1y" };

        if(!secret) throw Error;

        const token = jwt.sign(payload, secret, options);
        return token;
    }catch (error) {
        throw error;
    }
}

export const UserModel = mongoose.model<User>("User", userSchema);

export default UserModel;