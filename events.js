var events = [
  {
    id: 1,
    name: "Encounter a goblin",
    conditions: { environment: { timeOfDay: "night" }, identity: { playerLevel: 1 }, thing: { item: false } },
    actions: [
      { type: "combat", enemy: "goblin" },
    ],
  },
  {
    id: 2,
    name: "Encounter Sesame Street",
    conditions: { environment: { timeOfDay: "day" }, identity: { playerLevel: 1 }, thing: { item: true } },
    actions: [
      { type: "item", npc: "Snuffalufugus", item: "hug" },
    ],
  },
]

var gameState = {
  environment: {
    timeOfDay: "night",
  },
  identity: {
    playerLevel: 1, 
  },
  thing: {
    item: true, 
  },
};

function triggerRandomEvent() {
  const eligibleEvents = events.filter((event) => {
    return Object.entries(event.conditions).every(
      ([category, conditionValues]) => {
        const categoryState = gameState[category];
        return Object.entries(conditionValues).every(
          ([key, value]) => categoryState?.[key] === value
        );
      }
    );
  });

  console.log(eligibleEvents)

  if (eligibleEvents.length > 0) {
    var randomIndex = Math.floor(Math.random() * eligibleEvents.length);
    var randomEvent = eligibleEvents[randomIndex];

    console.log(`A ${randomEvent.name} occurs!`);

    randomEvent.actions.forEach((action) => {
      switch (action.type) {

        case "combat":
          startCombat(action.enemy);
          break;
        case "dialogue":
          displayDialogue(action.text);
          break;
        case "item":
          giveItem(action.enemy, action.item);
          break;
        default:
          console.warn(`Unknown action type: ${action.type}`);
      }
    });

    return true; 
  } else {
    return false;
  }
}

function startCombat(enemy) {
  console.log(`You are attacked by a ${enemy}!`);
}

function displayDialogue(text) {
  console.log(`${text}`);
}

function giveItem(enemy, item) {
  console.log(`${enemy} gives you a magical ${item}!`);
}

function gameLoop() {

  console.log(gameState.environment.timeOfDay = gameState.environment.timeOfDay === "night" ? "day" : "night")

  if (true) {
    triggerRandomEvent()

    console.log("An event occurred!"); 
  }
  setTimeout(gameLoop, 1000 / 1);
}

gameLoop() // Start events loop
