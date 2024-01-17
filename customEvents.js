
// requires html file to run

const name = "billybob joe"

class EventSeries {
  constructor(events, name) {
    this.events = events;
    this.currentEventIndex = 0;
    this.name = "billybob joe"
    this.isPaused = false;
    this.sequence = []; // Array to define custom event order
  }

  setSequence(sequence) {
    this.sequence = sequence;
  }

  executeNextEvent() {
    if (this.isPaused) {
      return;
    }

    const eventKey = this.sequence[this.currentEventIndex];
    this.events[eventKey]();
    this.currentEventIndex++;

    if (this.currentEventIndex >= this.sequence.length) {
      console.log("The end...");
      return;
    }
  }

  pause() {
    this.isPaused = true;
  }

  resume() {
    this.isPaused = false;
  }
}

// Example usage:
const eventSeries = new EventSeries({
  droppedOffHorse: () => console.log("Dropped off your horse in a swamp land"),
  bittenByViper: () => console.log("${NAME} are bitten by a swamp viper!"),
  playerDeath: () => console.log("${NAME} died...."),
});

eventSeries.setSequence(["bittenByViper", "droppedOffHorse", "playerDeath"]); // Custom sequence

document.addEventListener("keydown", () => {
  if (!eventSeries.isPaused) {
    eventSeries.executeNextEvent();
  }
});

document.addEventListener("keyup", () => {
  // Example: Pause on spacebar release
  if (event.key === " ") {
    eventSeries.pause();
  }
});

// Start requires html file
eventSeries.executeNextEvent();
