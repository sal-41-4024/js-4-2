import Paladin from '../Paladin';

test('Creating a Paladin', () => {
  const obj = new Paladin('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('paladin');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(40);
  expect(obj.defence).toBe(40);
});
