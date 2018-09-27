import React from 'react';
import { mount } from 'enzyme';

import { HomePage, mapDispatchToProps } from '../index';
import { changestring, addString } from '../actions';

describe('<HomePage />', () => {
  it('should not call handleSubmit if string is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage handleChange={() => {}} handleSubmit={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call handleSubmit if string is null', () => {
    const submitSpy = jest.fn();
    mount(
      <HomePage string="" handleChange={() => {}} handleSubmit={submitSpy} />,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('handleChange', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleChange).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'a string';
        result.handleChange({ target: { value: string } });
        expect(dispatch).toHaveBeenCalledWith(changestring(string));
      });
    });

    describe('handleSubmit', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.handleSubmit).toBeDefined();
      });

      it('should dispatch addString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.handleSubmit();
        expect(dispatch).toHaveBeenCalledWith(addString());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.handleSubmit(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
