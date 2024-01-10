class Food {
  constructor(name, statBoost, sideEffect) {
    this.name = name;
    this.statBoost = statBoost;
    this.sideEffect = sideEffect;
  }
}

class Monster {
  constructor(name, strength, agility, intelligence, health) {
    this.name = name;
    this.strength = strength;
    this.agility = agility;
    this.intelligence = intelligence;
    this.health = health;
    this.effects = [];
  }

  eat(food) {
    this.applyStatBoost(food.statBoost);
    this.effects.push(food.sideEffect);
    console.log(`${this.name} eats the ${food.name}!`);
    console.log(`Stat boost: ${JSON.stringify(food.statBoost)}`);
    console.log(`Side effect: ${food.sideEffect.toString()}`);
  }

  dayEnd() {
    this.effects.forEach((effect) => effect(this));
    this.effects = [];
  }

  applyStatBoost(boost) {
    for (const [stat, value] of Object.entries(boost)) {
      this[stat] += value;
    }
  }

  toString() {
    return `${this.name} (S:${this.strength}, A:${this.agility}, I:${this.intelligence}, H:${this.health})`;
  }
}

const foods = [
  new Food("Eyeball Stew", { strength: 1 }, (monster) => console.log(`${monster.name} sees things...`)),
  new Food("Slime Surprise", { agility: 1 }, (monster) => console.log(`${monster.name} is slippery! (Agility penalty)`)),
  new Food("Brain Jello", { intelligence: 1 }, (monster) => console.log(`${monster.name} has a headache! (Intelligence penalty)`)),
  new Food("Glowing Goo", { health: 2 }, (monster) => console.log(`${monster.name} feels radioactive! (Health penalty)`)),
  new Food("Smooshed Grom", { strength: 2, agility: 2, health: 2 }, (monster) => console.log(`${monster.name} feels powerful`)),
];

const monster = new Monster("Grompo", 5, 3, 2, 10);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const food = foods[Math.floor(Math.random() * foods.length)];
monster.eat(food);


monster.dayEnd();
console.log(monster);
