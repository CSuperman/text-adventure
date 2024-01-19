// exploring item features
const craftableItems = {
  wolfFurArmor: {
    name: "Wolf Fur Armor",
    baseMaterial: "Wolf Fur",
    mutations: ["Enhanced Speed", "Heightened Senses"],
    transformations: [],
    sideEffects: [{ name: "Berserk Rage", chance: 5 }],
    lives: 3,
    rarity: "uncommon",
    benefits: [
      { name: "Enhanced Speed", unlocked: false },
      { name: "Heightened Senses", unlocked: false },
    ],
    curses: [
      { name: "Berserk Rage", unlocked: false },
    ],
  },
  // more items
};




function unlockItemTrait(item, trait) {
=
  if (shouldUnlock(trait)) {
    item[trait.type].forEach((t) => (t.unlocked = true));
    console.log(`${trait.name} unlocked for ${item.name}!`);
  }
}


function playGameForDuration(duration) {

}

playGameForDuration(1000); // Simulate play for 1000 time units
unlockItemTrait(craftableItems.wolfFurArmor, craftableItems.wolfFurArmor.benefits[0]);






