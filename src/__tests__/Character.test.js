import Character from '../Character';
import Swordman from '../Swordman';

test('Cannot created an object of an abstrat class', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const character = new Character('name', 'swordman');
  }).toThrow('Cannot instanciate an abstract class');
});

test('Name cannot be less then 2', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const swordman = new Swordman('1');
  }).toThrow('Name must be between 2 and 10 characters');
});

test('Name cannot be more than 10', () => {
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const swordman = new Swordman('12345678910');
  }).toThrow('Name must be between 2 and 10 characters');
});

test('Cannot creat type not from the list', () => {
  class TestClass extends Character {
    constructor(name) {
      super(name, 'exception');
    }
  }
  expect(() => {
    // eslint-disable-next-line no-unused-vars
    const testing = new TestClass('name');
  }).toThrow();
});
