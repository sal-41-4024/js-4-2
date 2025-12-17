import Character from './Character';

export default class Bowerman extends Character {
  constructor(name) {
    super(name, 'bowerman');
    this.attack = 20;
    this.defence = 20;
  }
}
