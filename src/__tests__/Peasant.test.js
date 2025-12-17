import Peasant from '../Peasant';

test('Creating a Peasant', () => {
  const obj = new Peasant('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('peasant');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(10);
  expect(obj.defence).toBe(20);
});
