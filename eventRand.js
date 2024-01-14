var events = {
  "mysteriousTreasure": {
    title: "A Gleaming Discovery",
    story: "As you explore a dimly lit cave, a glimmer catches your eye. You uncover a chest overflowing with ancient gold coins.",
    conditions: {
      location: "forest",
      timeOfDay: "day",
      count: 0,
    }
  },
  "somethingHappened": {
    title: "A Thief in the Night",
    story: "You fell asleep and someone stole from your ...",
    conditions: {
      location: "forest",
      timeOfDay: "night",
      count: 0,
    }
  },
};

// MAIN FUNCTION
function randomizeEvent() {
  var eventName = Object.keys(events)[Math.floor(Math.random() * Object.keys(events).length)];

  if (areConditionsMet(events[eventName].conditions)) {
    countToThree(eventName);
  }
}

function areConditionsMet(conditions) {
  // Replace with your actual condition checking logic
  const currentLocation = "forest";
  const currentTimeOfDay = "day";
  return conditions.location === currentLocation && conditions.timeOfDay === currentTimeOfDay;
}

function countToThree(eventName) {
  if (events[eventName].conditions.count <= 3) {
    events[eventName].conditions.count++;
    console.log(`Count: ${events[eventName].conditions.count}`);

  if (events[eventName].conditions.count === 3) {
    const eventToAddBack = events[eventName];
    delete events[eventName];
    setTimeout(addEventBack, 5000, eventToAddBack);    }
  else {
      setTimeout(countToThree, 1000, eventName);
    }
  }
}

function addEventBack(eventToAdd) {
  events[eventToAdd.eventName] = {
    eventName: eventToAdd.eventName,
    title: eventToAdd.title,
    story: eventToAdd.story,
    conditions: {
      location: eventToAdd.conditions.location,
      timeOfDay: eventToAdd.conditions.timeOfDay,
      count: 0
    }
  };
  console.log(`Event '${eventToAdd.eventName}' added back to events.`);
}

// Example usage
randomizeEvent();
