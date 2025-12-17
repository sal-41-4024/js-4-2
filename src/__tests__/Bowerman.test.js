import Bowerman from '../Bowerman';

test('Creating a Bowerman', () => {
  const obj = new Bowerman('name');
  expect(obj.name).toBe('name');
  expect(obj.type).toBe('bowerman');
  expect(obj.health).toBe(100);
  expect(obj.level).toBe(1);
  expect(obj.attack).toBe(20);
  expect(obj.defence).toBe(20);
});
