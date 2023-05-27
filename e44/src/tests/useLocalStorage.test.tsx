import useLocalStorage from "../hooks/useLocalStorage";
import { act, renderHook } from "@testing-library/react";

beforeEach(() => {
    localStorage.clear();
});

test.skip("Setting a new data to store and changing something else", () => {
    
    const someConfig = {
        username: "Jonh",
        lang: "en",
    };

    const { result }: any = renderHook(() => useLocalStorage("test", someConfig))

    act(() => {
        result.current[1]({
            username: "Jonh",
            lang: "fr",
        })
    });
    
    expect(result.current[0]).toStrictEqual({
        username: "Jonh",
        lang: "fr",
    })
  });
