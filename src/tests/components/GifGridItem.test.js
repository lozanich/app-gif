import "@testing-library/jest-dom";
import React from "react";
import GifGridItem from "../../components/GifGridItem";
import { shallow } from "enzyme";

describe("Pruebas al GridItem Component", () => {
  const deleteImage = (id) => {};
  const img = {
    id: "12jhsa7",
    title: "Goku",
    url: "https://",
  };
  const wrapper = shallow(
    <GifGridItem
      id={img.id}
      title={img.title}
      url={img.url}
      deleteImageG={deleteImage}
    />
  );
  // beforeEach(() => {
  //   img = {
  //     id: "12jhsa7",
  //     title: "Goku",
  //     url: "https://",
  //   };

  //   wrapper = shallow(
  //     <GifGridItem
  //       id={img.id}
  //       title={img.title}
  //       url={img.url}
  //       deleteImageG={deleteImage}
  //     />
  //   );
  // });

  test("Debe renderizar el componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de tener un parrafo con el titulo", () => {
    expect(wrapper.find("p").text().trim()).toBe(img.title);
  });

  test("Debe utilizar los atributos en la imagen", () => {
    const image = wrapper.find("img");
    expect(image.prop("src")).toBe(img.url);
    expect(image.props().alt).toBe(img.title);
  });

  test("Debe tener animated animate__bounce", () => {
    const div = wrapper.find("div").hasClass("animate__bounce");
    expect(div).toBe(true);
  });
});
