import React from 'react';
import { render } from '@testing-library/react';
import enzyme, {mount} from "enzyme"; 
import App from './App';

var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

test('This test works', () => {

  const mockChange = jest.fn(); 
  const wrapper = mount(<App onChange = {mockChange}/>); 

  const input = wrapper.find('input'); 
  input.invoke('onChange')(
    {target: {
    value: '1'}
    }
  ); 

  const input2 = wrapper.find('input');
  input2.invoke('onBlur')(null);   

  expect(mockChange).toHaveBeenCalledWith('1');
});


test('This test does not', () => {

  const mockChange = jest.fn(); 
  const wrapper = mount(<App onChange = {mockChange}/>); 

  const input = wrapper.find('input'); 

  input.invoke('onChange')(
    {target: {
    value: '1'}
    }
  ); 

  input.invoke('onBlur')(null);   

  expect(mockChange).toHaveBeenCalledWith('1'); // expected "1" received ""
});
