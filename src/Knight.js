import Character from './Character';

export default class Knight extends Character {
  constructor(name) {
    super(name, 'knight');
    this.attack = 30;
    this.defence = 30;
  }
}
