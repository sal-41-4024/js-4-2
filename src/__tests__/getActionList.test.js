import getActionList from '../getActionList';

test('Correct action list', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
      },
    ],
  };
  const defaultDescription = 'Описание недоступно';
  expect(getActionList(obj, defaultDescription)).toEqual(
    [
      {
        id: 8,
        name: 'Двойной выстрел',
        icon: 'http://...',
        description: 'Двойной выстрел наносит двойной урон',
      },
      {
        id: 9,
        name: 'Нокаутирующий удар',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
    ],
  );
});

test('No property', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
  };
  const defaultDescription = 'Описание недоступно';
  expect(getActionList(obj, defaultDescription)).toEqual([]);
});

test('Different format', () => {
  const obj = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: 'Description',
  };
  const defaultDescription = 'Описание недоступно';
  expect(() => getActionList(obj, defaultDescription)).toThrow('Not a list');
});
