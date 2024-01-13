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
    
        await EmployeeModel.insertMany(parsedData.employees.employee);

        console.log("Data imported successfully!");
    } catch (error) {  
        console.log("ERROR",error); 
        throw Error;
    }
};

export default importData;