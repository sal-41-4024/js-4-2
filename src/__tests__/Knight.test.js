import Knight from '../Knight';

test('Creating a Knight', () => {
  const obj = new Knight('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('knight');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(30);
  expect(obj.defence).toBe(30);
});
