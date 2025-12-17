import Character from './Character';

export default class Paladin extends Character {
  constructor(name) {
    super(name, 'paladin');
    this.attack = 40;
    this.defence = 40;
  }
}
