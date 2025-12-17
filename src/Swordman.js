import Character from './Character';

export default class Swordman extends Character {
  constructor(name) {
    super(name, 'swordman');
    this.attack = 30;
    this.defence = 20;
  }
}
