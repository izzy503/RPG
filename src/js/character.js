export default class Character {
  constructor(name, health, attackDamage, armorClass) {
    this.name = name;
    this.health = health;
    this.attackDamage = attackDamage;
    this.armorClass = armorClass;
  }

  attack(target) {
    console.log(`${this.name}' attacks ${target.name} for ${this.attackDamage} damage! `);
    target.recieveDamage(this.attackDamage);
  }

  recieveDamage(damage) {
    this.health -= damage;
    console.log(`${this.name} recieves $damage} damage. Current health: ${this.health}`);
  }

  isAlive() {
    return this.health > 0;
  }
}