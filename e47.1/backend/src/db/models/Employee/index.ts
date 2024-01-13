import mongoose, { Schema, Document} from "mongoose";
import {Employee, Skill} from "../../../types";

// export interface EmployeeDocument  extends Document {};
const skillSchema = new Schema <Skill>({

    skill: [{
        type: Schema.Types.Mixed,
    }]
});

const employeeSchema = new Schema<Employee>({
    id: {
        type: String,
    },
    name: {
        type: String,
    },
    "location-city": {
        type: String,
    },
    "location-state": {
        type: String,
    },
    exp: {
        type: Number, 
    },
    skills: [skillSchema],
    salary: {
        type: Number,
    },
    category: {
        type: Schema.Types.Mixed,
    },
    subcategory: {
        type: String,
    },
    "work-authorization": {
        type: String,
    }
});

const EmployeeModel = mongoose.model<Document>("Employee", employeeSchema);

export default EmployeeModel;