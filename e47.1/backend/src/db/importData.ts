import dotenv from "dotenv";
import xml2json from "xml2json";
import * as fs from "fs";
import * as path from "path";
import EmployeeModel from "./models/Employee";

dotenv.config();

const importData = async function () {
    try {

        const xmlFilePath = path.join(__dirname, "../../employees.xml");
    
        const xmlData = fs.readFileSync(xmlFilePath,"utf-8");
    
        const JSONData = xml2json.toJson(xmlData);

        const parsedData = JSON.parse(JSONData);

        const modifiedEmployees = parsedData.employees.employee.map((employee: any) => {
            const modifiedEmployee = {
                ...employee,
                work_authorization: employee['work-authorization'],
                location_city: employee['location-city'],
                location_state: employee['location-state'],
            };

            delete modifiedEmployee['work-authorization'];
            delete modifiedEmployee['location-city'];
            delete modifiedEmployee['location-state'];

            return modifiedEmployee;
        });

        await EmployeeModel.insertMany(modifiedEmployees);
    
        // await EmployeeModel.insertMany(parsedData.employees.employee);

        console.log("Data imported successfully!");
    } catch (error) {  
        console.log("ERROR",error); 
        throw Error;
    }
};

export default importData;