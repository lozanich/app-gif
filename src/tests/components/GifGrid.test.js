import "@testing-library/jest-dom";
import React from "react";
import GifGrid from "../../components/GifGrid";
import { shallow } from "enzyme";
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("Pruebas en el componente GifGrid", () => {
  const category = "Goku";

  test("Deberia de ser el snapsshot de GifGrid", () => {
    useFetchGifs.mockReturnValue({
      data: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia de mostrar items cuando cargan imagenes use Fetch gifs", () => {
    const imgs = [
      {
        id: "278anas",
        title: "Una imagen",
        url: "https://",
      },
    ];
    useFetchGifs.mockReturnValue({
      data: imgs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find("p").exists()).toBe(false);
    expect(wrapper.find("GifGridItem").length).toBe(imgs.length);
  });
});
