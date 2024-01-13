const events = {
  "mysteriousTreasure": {
    title: "A Gleaming Discovery",
    story: "As you explore a dimly lit cave, a glimmer catches your eye. You uncover a chest overflowing with ancient gold coins.",
    conditions: {
      location: "cave",
      timeOfDay: "night",
      count: null,
    }
  },
  "unexpectedEncounter": {
    title: "A Strange Meeting",
    story: "While crossing a dense forest, you stumble upon a lone figure cloaked in shadows. They offer you a cryptic message before vanishing into the woods.",
    conditions: {
      location: ["forest", "mountain"],
      timeOfDay: "any",
      count: null,
    }
  },
  "suddenStorm": {
    title: "The Wrath of Nature",
    story: "A fierce storm erupts, unleashing its fury upon the land. You seek shelter as lightning strikes and thunder roars across the sky.",
    conditions: {
      location: "outdoors",
      weather: "rain",
      count: null,
    }
  },

};
