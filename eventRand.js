const events = {
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
   title: "A Band of Thieves",
   story: "You were distracted while taking a nap and your ... is missing",
   conditions: {
     location: "forest",
     timeOfDay: "day",
     count: 0,
   }
 },
};

const currentLocation = "forest"; 
const currentTimeOfDay = "night"; 

function selectRandomEvent() {
 const eligibleEvents = Object.values(events).filter(
   (event) =>
     event.conditions.location === currentLocation &&
     event.conditions.timeOfDay === currentTimeOfDay &&
     event.conditions.count <= 2
 );

  if (eligibleEvents.length === 0) {
    // ... (handle no eligible events case)

   console.log("No eligible events found.");
   return;

  } else {

    for (let i = eligibleEvents.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [eligibleEvents[i], eligibleEvents[j]] = [eligibleEvents[j], eligibleEvents[i]];
    }

    const chosenEvent = eligibleEvents[0];
 }

 var chosenEvent = eligibleEvents[Math.floor(Math.random() * eligibleEvents.length)];

 console.log("Selected event:", chosenEvent.title);
 console.log(chosenEvent.story);

 chosenEvent.conditions.count++;
 console.log(chosenEvent.conditions.count)


 delete events[chosenEvent.id];


 setTimeout(() => {
   events[chosenEvent.id] = chosenEvent;
 }, 5000);
 console.log(events)
}

selectRandomEvent();
