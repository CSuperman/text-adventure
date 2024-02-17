class Food {
  constructor(name, color, statBoost, sideEffect) {
    this.name = name;
    this.color = color;
    this.statBoost = statBoost;
    this.sideEffect = sideEffect;
  }
}

class Monster {
  constructor(name, stats = { strength: 0, agility: 0, intelligence: 0, health: 0 }) {
    this.name = name;
    this.stats = stats;
    this.effects = [];
  }

  eat(food) {
    this.applyStatBoost(food.statBoost);
    this.effects.push(food.sideEffect);
    console.log(`${this.name} eats the ${food.name}!`);
    console.log(`Stat boost: ${JSON.stringify(food.statBoost)}`);

  }

  dayEnd() {
    this.effects.forEach((effect) => {
      if (typeof effect === 'function') {
        effect(this);
      } else {
        console.log(`Side effect: ${effect}`); // Log strings instead of calling
      }
    });
    this.effects = [];
  }

  applyStatBoost(boost) {
    for (const [stat, value] of Object.entries(boost)) {
      this.stats[stat] += value;
    }
  }

  toString() {
    return `${this.name} (S:${this.stats.strength}, A:${this.stats.agility}, I:${this.stats.intelligence}, H:${this.stats.health})`;
  }
}


const foods = [
    new Food("Eyeball Stew", { color: "yellow" }, { strength: 1 }, `Hallucinations`),
  new Food("Slime Surprise", { color: null }, { agility: 1 }, "Slippery (Agility penalty)"),
  new Food("Brain Jello", { color: null }, { intelligence: 1 }, (monster) => console.log(`${monster.name} has a headache! (Intelligence penalty)`)),
  new Food("Glowing Goo", { color: null }, { health: 2 }, (monster) => console.log(`${monster.name} feels radioactive! (Health penalty)`)),
  new Food("Smooshed Grom", { color: null }, { strength: 2, agility: 2, health: 2 }, (monster) => console.log(`${monster.name} feels powerful`)),
];

const monster = new Monster("Grompo");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const food = foods[Math.floor(Math.random() * foods.length)];
monster.eat(food);
monster.dayEnd();
console.log(monster);
