import useStorage from "./useStorage";

const useSessionStorage = (key: string, initialValue: any) => {
    return useStorage(key, initialValue, sessionStorage);
}

export default useSessionStorage;