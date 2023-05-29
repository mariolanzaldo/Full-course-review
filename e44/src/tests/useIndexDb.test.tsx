import { clear } from "idb-keyval";
import "fake-indexeddb/auto";
import { act, renderHook } from "@testing-library/react";
import useIndexedDB from "../hooks/useIndexDB";

beforeEach(() => {
    clear();
})

test("Basic test", async () => {

    const initialData = {
        prop1: 134,
        prop2: "John",
    }
  
    const { result }: any = renderHook(() => useIndexedDB('key', initialData));

    const [item] = result.current;
    
    expect(item).toStrictEqual(initialData);
});

test('Modifing data', async () => {

    const initialData = {
        prop1: 134,
        prop2: "John",
    };

    const {result}: any = renderHook(() => useIndexedDB("info", initialData)); 

    expect(result.current[0]).toStrictEqual(initialData)

    const updatedData = {
        prop1: 134,
        prop2: "Max",
    };

    act(() => {
        result.current[1](updatedData)
    })
    
    expect(result.current[0]).toStrictEqual(updatedData)
  });