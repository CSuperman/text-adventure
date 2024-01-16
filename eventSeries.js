const name = "billybob joe"

class EventSeries {
  constructor(events, name) {
    this.events = events;
    this.currentEventIndex = 0;
    this.name = "billybob joe"
  }

  executeNextEvent() {
    const eventKey = Object.keys(this.events)[this.currentEventIndex];
    this.events[eventKey]();
    this.currentEventIndex++;

    if (this.currentEventIndex >= Object.keys(this.events).length) {
      console.log("The end.");
      return;
    }
  }
}

const eventSeries = new EventSeries({
  droppedOffHorse: () => console.log("Dropped off your horse in a swamp land"),
  bittenByViper: () => console.log("${NAME} are bitten by a swamp viper!"),
  playerDeath: () => console.log("${NAME} died...."),
});

document.addEventListener("keydown", () => {
  eventSeries.executeNextEvent();
});

// Start
eventSeries.executeNextEvent();

