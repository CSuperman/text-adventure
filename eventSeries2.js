class EventSeries {
  constructor(events) {
    this.events = events;
    this.metadata = {};
  }

  setEventMetadata(eventName, metadata) {
    this.events[eventName].metadata = metadata;
  }

  getEventMetadata(eventName) {
    return this.events[eventName].metadata;
  }


}





const eventSeries = new EventSeries({
  droppedOffHorse: {
    // ... event
    metadata: {
      author: "Alice",
      dateCreated: "2024-01-18",
      notes: "adding a horse-finding quest later."
    }
  },
  bittenByViper: {
    // ... event
    metadata: {
      version: 2,
      dependencies: ["viperAttackModule"]
    }
  },
  // ... more
});






const horseEventMetadata = eventSeries.getEventMetadata("droppedOffHorse");
console.log(horseEventMetadata.author); // "Alice"

// Update
eventSeries.setEventMetadata("bittenByViper", { version: 3 });
