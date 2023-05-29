import { useEffect, useState } from "react";
import { get, set } from "idb-keyval";

const useIndexedDB = (key: string, initialValue: any) => {
    const [item, setItem] = useState(initialValue);

    useEffect(() => {
        (async () => {
            try {
                const saved = await get(key);

                if(saved) {
                    setItem(saved);
                }
            } catch(e: any) {
                console.warn("Something went wrong:", e);
            }
        })();
    }, []);

    useEffect(() => {
        set(key, () => item);
    },[item, key]);

    return [item, setItem];
};

export default useIndexedDB;