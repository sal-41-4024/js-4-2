import Spearman from '../Spearman';

test('Creating a Spearman', () => {
  const obj = new Spearman('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('spearman');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(20);
  expect(obj.defence).toBe(30);
});
