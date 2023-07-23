
import Character from '../src/js/character.js';

/*
const Paladin = new Character("Paladin", 80, 25, 0);
const Wizard = new Character("Wizard", 60, 15, 0);
    const battle = new Battle(Knight, Wizard);
    battle.start();


    //attack mean hp--?
    

    describe('Battle', () => {
      test('attack should decrease opponent hp by 1', () => {
        const battle = new Battle(Knight, Wizard);
        battle.start();
        battle.Knight.attack(battle.Wizard);
        expect(battle.Wizards.health).toBe(99); //how do you determine damage? whether or not hit or miss?
      });
    
    });
    
    //battle mean hp-- iff roll = 20?

    return type? decimal? int? string? boolean?
*/

describe('Character', () => {
  
  test('should be able to create a character', () => {

    const character = new Character("knight" , 100, 20, 0);
    expect(character).toBeDefined();
    expect(character.name).toBe("knight");
    expect(character.health).toBe(100);
    expect(character.attackDamage).toBe(20);
  });

});