import "@testing-library/jest-dom";
import React from "react";
import GridExpertApp from "../../components/GifExpertApp";
import { shallow } from "enzyme";

describe("Pruebas al componente GridExpertApp", () => {
  const wrapper = shallow(<GridExpertApp />);

  test("Deberia de ser el snapshot de GridExpertApp", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Deberia de mostarr una lista de categorias", () => {
    const categories = ["Goku", "One punch"];
    const wrapper = shallow(<GridExpertApp defaultCategories={categories} />);

    expect(wrapper.find("GifGrid").length).toBe(categories.length);
  });
});
