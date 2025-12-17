export default class Character {
  constructor(name, type) {
    if (new.target === Character) {
      throw new Error('Cannot instanciate an abstract class');
    }
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name must be between 2 and 10 characters');
    }
    const types = ['swordman', 'bowerman', 'spearman', 'peasant', 'knight', 'paladin'];
    if (!types.includes(type)) {
      throw new Error(`Type must be one of ${types}`);
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = undefined;
    this.defence = undefined;
  }
}
