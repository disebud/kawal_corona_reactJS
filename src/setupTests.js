import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

global.React = React;
global.shallow = shallow;