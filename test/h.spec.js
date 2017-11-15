import expect from 'expect';
import { h } from '../src';

describe('h.js', () => {
  it('should return the type of the node', () => {
    ['p', 'div', 'span'].forEach(tag => {
      expect(h(tag, null, null).nodeName).toEqual(tag);
    });
  });
});