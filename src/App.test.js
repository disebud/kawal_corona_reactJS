import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';


// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

//deskripsikan test case didalam component app
describe("<App/>", () => {
  //it sebuah fungsi yang digunakan untuk menjalankan setiap test case
  it("should in <App/> components tobe div", () => {
    //shallow mengambil isi dari component App
    const wrapper = setup();
    //yang diharapkan dari test case susuai atau tidak
    expect(wrapper.find(`div`).length).toBe(23);
  });
  it("should in <App/> components tobe h1", () => {
    //shallow mengambil isi dari component App
    const wrapper = setup();
    //yang diharapkan dari test case susuai atau tidak
    expect(wrapper.find(`h1`).length).toBe(1);
  });
  it("should in <App/> components tobe h3", () => {
    //shallow mengambil isi dari component App
    const wrapper = setup();
    //yang diharapkan dari test case susuai atau tidak
    expect(wrapper.find(`h3`).length).toBe(4);
  });
  //find atributes jsx
  // it("should component is called at least one", () => {
  //   const wrapper = setup();
  //   const appComponent = findByAttr(wrapper, "component-app");
  //   expect(appComponent.length).toEqual(1);
  // });
  // it("should component is called at least one", () => {
  //   const wrapper = setup();
  //   const appComponent = findByAttr(wrapper, "component-app");
  //   expect(appComponent.length).toEqual(1);
  // });
  // it("initial name is string", () => {
  //   const wrapper = setup();
  //   const initialState = wrapper.state("name");
  //   expect(initialState).toMatch("");
  // });
})