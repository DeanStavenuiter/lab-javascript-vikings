// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.damage = damage;
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  }
  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;

    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return "A Saxon has died in combat";
    }
  }
}

// War
class War {
    constructor(){
        this.vikingArmy = [];
        this.saxonArmy = []; 
    }
  

  addViking(viking) {
    this.vikingArmy.push(viking)
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon)

  }
  vikingAttack() {
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)

    this.saxonArmy[randomSaxon].receiveDamage(this.vikingArmy[randomViking].strength) 
    
    if(this.saxonArmy[randomSaxon].health <= 0){
        this.saxonArmy.splice(0, 1)
      }

    return `A Saxon has died in combat`
    }


  saxonAttack() {
    let randomViking = Math.floor(Math.random() * this.vikingArmy.length)
    let randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)

    this.vikingArmy[randomViking].receiveDamage(this.saxonArmy[randomSaxon].strength) 

    if(this.vikingArmy[randomViking].health <= 0){
        this.vikingArmy.splice(0, 1)
    }

    return `${this.vikingArmy[randomViking].name} has received ${this.saxonArmy[randomSaxon].strength} points of damage`
  }

  showStatus() {
    if ( this.saxonArmy.length === 0 ) {
        return "Vikings have won the war of the century!"
    } else if ( this.vikingArmy.length === 0 ) {
        return "Saxons have fought for their lives and survived another day..."
    } else {
        return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

