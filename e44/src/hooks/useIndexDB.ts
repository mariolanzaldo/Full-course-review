import { useEffect, useState } from "react";
import { openDB } from "idb";

const useIndexDB = (dbName: string, store: any, key: string, val: any) => {
    const [value, setValue] = useState();

    useEffect(() => {
       
    }, []);

    return [value, setValue];
};