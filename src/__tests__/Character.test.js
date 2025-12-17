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

test('Correct level up', () => {
  const swordman = new Swordman('name');
  swordman.health = 99;
  swordman.levelUp();
  expect(swordman.level).toBe(2);
  expect(swordman.health).toBe(100);
  expect(swordman.attack).toBeCloseTo(30 * 1.2);
  expect(swordman.defence).toBeCloseTo(20 * 1.2);
});

test('Correct points', () => {
  const swordman = new Swordman('name');
  swordman.damage(2);
  expect(swordman.health).toBeCloseTo(98.4);
  swordman.health = 100;
});

test('Cannot level up when no health', () => {
  expect(() => {
    const swordman = new Swordman('name');
    swordman.health = 0;
    swordman.levelUp();
    swordman.health = 100;
  }).toThrow('Level up is possible only if there is health');
});

test('Cannot damage', () => {
  expect(() => {
    const swordman = new Swordman('name');
    swordman.health = 0;
    swordman.damage(1);
    swordman.health = 100;
  }).toThrow('Cannot be damaged');
});
