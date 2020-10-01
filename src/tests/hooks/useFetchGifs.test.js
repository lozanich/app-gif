import React from "react";
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Pruebas sobre hoook UseFetchGifs", () => {
  test("Debe de retornar el estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Gok"));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(0);
    expect(loading).toBe(true);
  });

  test("Debe de reotrnar arreglo de imagenes y loading en false", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetchGifs("Gok"));
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect(data.length).toBe(10);
    expect(loading).toBe(false);
  });
});
