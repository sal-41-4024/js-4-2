import Character from './Character';

export default class Peasant extends Character {
  constructor(name) {
    super(name, 'peasant');
    this.attack = 10;
    this.defence = 20;
  }
}
