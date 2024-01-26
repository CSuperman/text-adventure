class MagicalGenieLamp {
  constructor(character) {
    this.wishesRemaining = 3; // Number of wishes
    this.isDestroyed = true;
    this.repairItems = [];
    this.character = character;
    this.character.x = 1  
    this.character.y = 1 
  }

  grantWish(wish) {
    if (this.wishesRemaining > 0) {
      console.log(`Your wish for ${wish} is granted!`);
      this.wishesRemaining--;
    } else {
      console.log("You have no more wishes remaining.");
    }
  }

  // BROKEN !!!
  Destruction() {
    this.isDestroyed = false;
    this.generateRepairItems();
    console.log("The Magical Genie Lamp has been destroyed! You only have one wish remaining.");
  }

  generateRepairItems() {
    this.repairItems = ["Magic Dust", "Ancient Scroll", "Enchanted Gem"];
  }

  repair(items) {
    if (this.repairItems.every(item => items.includes(item))) {
      this.isDestroyed = true;
      this.wishesRemaining = 1;
      console.log("The Magical Genie Lamp has been repaired! You have one wish available.");
      this.repairItems = [];
    } else {
      console.log("You do not have the required items to repair the lamp.");
    }
  }

  revive() {
    if (!this.character.alive && this.wishesRemaining > 0) {
      this.character.health = 1;
      this.character.x = Math.random() * (99 - 1) + 1 || 0  // random lost location
      this.character.y = Math.random() * (99 - 1) + 1 || 0  // random lost location
      this.wishesRemaining = 1;
      console.log("The Magical Genie Lamp has revived you with 1 health!");
    } else if (!this.isDestroyed) {
      console.log("The Magical Genie Lamp is destroyed and cannot revive you.");
    } else {
      console.log("You are already alive.");
    }
  }
}

// Example usage:
var character = {
  name: "Bob",
  health: 100, 
  alive: true,
  inventory: [],
};

const lamp = new MagicalGenieLamp(character);

lamp.grantWish("to win");


console.log(`You have ${lamp.wishesRemaining} wishes remaining.`);
//console.log(`You are ${lamp.alive ? "alive" : "dead"}.`);

// CHANGES

character.alive = false
console.log("character has died")

var destructionChance = Math.random();
  if (destructionChance < 0.5) {
    lamp.Destruction()
    lamp.revive(character);

    lamp.grantWish("to win");
    lamp.grantWish("to have another wish");
  }
