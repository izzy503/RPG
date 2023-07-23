mport Battle from '../src/js/battle.js';

describe('Character', () => {
  
  test('should be able to create a character', () => {

    const character = new Character("knight" , 100, 20, 0);
    expect(character).toBeDefined();
    expect(character.name).toBe("knight");
    expect(character.health).toBe(100);
    expect(character.attackDamage).toBe(20);
  });

  test('should be able to attack another character', () => {});

  test('should be able to take damage', () => {});


  test('should be able to die', () => {});

});