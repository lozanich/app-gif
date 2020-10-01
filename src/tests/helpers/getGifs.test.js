import { getGifs } from "../../helpers/getGifs";

describe("Pruebas en getGifs fetch", () => {
  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("Goku");
    expect(gifs.length).toBe(10);
  });

  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifs("");
    expect(gifs.length).toBe(0);
  });
});
