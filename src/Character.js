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

  levelUp() {
    if (this.health <= 0) {
      throw new Error('Level up is possible only if there is health');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health <= 0) {
      throw new Error('Cannot be damaged');
    }
    this.health -= points * (1 - this.defence / 100);
  }
}
