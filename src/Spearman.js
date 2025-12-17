import Character from './Character';

export default class Spearman extends Character {
  constructor(name) {
    super(name, 'spearman');
    this.attack = 20;
    this.defence = 30;
  }
}
