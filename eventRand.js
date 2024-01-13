function randomizeEvent(eventName) {
  const event = events[eventName];
  

  if (areConditionsMet(event.conditions)) {

    countToThree(eventName, 1);
  }
}

function countToThree(eventName, count) {
  // Execute event after counting to 3
  if (count <= 3) {
    console.log(`Count: ${count}`);
    setTimeout(() => countToThree(eventName, count + 1), 1000); // Wait for 1 second
  } else {
 
    console.log(`Event '${eventName}' triggered!`);

    

    events[eventName].conditions.count = null;
  }
}

// Example usage from events
randomizeEvent("mysteriousTreasure");
