import Swordman from '../Swordman';

test('Creating a swordman', () => {
  const obj = new Swordman('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('swordman');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(30);
  expect(obj.defence).toBe(20);
});
