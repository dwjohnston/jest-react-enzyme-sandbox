import React from 'react';
import { render } from '@testing-library/react';
import enzyme, {mount} from "enzyme"; 
import App from './App';

var Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

test('gives the correct value on blur', () => {

  const mockChange = jest.fn(); 
  const wrapper = mount(<App onChange = {mockChange}/>); 

  const input = wrapper.find('input'); 

  input.invoke('onChange')(
    {target: {
    value: '1'}
    }
  ); 


  //Doesn't work
  //input.invoke('onBlur')(null); 


  //Works
  const input2 = wrapper.find('input');
  input2.invoke('onBlur')(null); 

  

  expect(mockChange).toHaveBeenCalledWith('1');
});
