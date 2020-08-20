import React from 'react';
import { mount } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

const footer = mount(<Footer />);

describe('<Footer />', () => {
  test('Render del Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Storee');
  });
});

describe('Footer Snapshot', () => {
  test('Comprobar la UI del componente FOoter', () => {
    const footer = create(<Footer />);
    expect(footer.toJSON()).toMatchSnapshot();
  });
});
