import useStorage from "./useStorage";

const useLocalStorage = (key: string, initialValue: any) => {
    return useStorage(key, initialValue, localStorage);
}

export default useLocalStorage;