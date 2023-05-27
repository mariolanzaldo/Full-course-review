import {
    useEffect,
    useState,
    useCallback,
} from 'react';

function useStorage <T>(key: string, initialValue: any, storage: any) {
    const readValue = useCallback(() : T => {
        // if(typeof window === 'undefined'){
        //     return initialValue;
        // }

        try {
            const item = storage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue
        } catch (err) {
            console.warn(`Error reading localStorage key "${key}"`, err);
            return initialValue;
        }
    }, [initialValue, key]);

    const [storedValue, setStoredValue] = useState(readValue);

    useEffect(() => {
        setStoredValue(readValue())
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

    return [storedValue, setStoredValue];
};

export default useStorage;