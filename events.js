const events = [
  {
    id: 1,
    name: "Encounter a monster",
    conditions: { environment: { timeOfDay: "night" }, identity: { playerLevel: 1 } },
    actions: [
      { type: "combat", npc: "monster" },
    ],
  },
  {
    id: 2,
    name: "Encounter Sesame Street",
    conditions: { environment: { timeOfDay: "day" }, identity: { playerLevel: 1 } },
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
};


function triggerRandomEvent() {
  var eligibleEvents = events.filter((event) => {
    return Object.entries(event.conditions).every(
      ([category, conditionValues]) => {
        return Object.entries(conditionValues).every(
          ([key, value]) => gameState[category][key] === value
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
          startCombat(action.npc);
          break;
        case "dialogue":
          displayDialogue(action.text);
          break;
        case "item":
          giveItem(action.npc, action.item);
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

// testing 
function startCombat(npc) {
  console.log(`You are attacked by a ${npc}!`);
}

function displayDialogue(text) {
  console.log(`${text}`);
}

function giveItem(npc, item) {
  console.log(`${npc} gives you a magical ${item}!`);
}


function gameLoop() {

  // in this case it's always the other, obviously 1 of each
  console.log(gameState.environment.timeOfDay = gameState.environment.timeOfDay === "night" ? "day" : "night")

  // do the same for LEVEL, etc

  if (true) {
  	triggerRandomEvent()
  }
  setTimeout(gameLoop, 1000 / 1);
}

gameLoop() // Start events loop

