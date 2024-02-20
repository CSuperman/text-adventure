// testing an idea for new player mode
// and data gathering


let gameSettings = {
    difficulty: "normal",
};

let character = {
    name: "Hero",
    health: 100,
    lowHpCount: [], 
    status: "alive",
    location: "Start",
    time: new Date(),
    monster: "None",
    history: [],
    updateStatus: function(location = location, monster = monster) {
        this.location = location;
        this.time = new Date();
        this.monster = monster;

        if (this.health <= 0) {
            this.status = "dead";
            console.log(`${this.name} has died at ${this.location} fighting ${this.monster} at ${this.time}.`);
            // Modify game settings when character dies
            gameSettings.difficulty === "hard" ? gameSettings.difficulty = "easy" : null
        } else if (this.health <= 20) {
            this.status = "low health";
            this.lowHpCount++
            console.log(`${this.name} is low on health at ${this.location} fighting ${this.monster} at ${this.time}.`);
            // Modify game settings when character is low on hp
            if (this.lowHpCount >= 3) {
                    console.log("would you like to train on the tutorial to make your playing experience more enjoyable?")
            }
        } else if (this.health <= 50) {
            this.status = "almost dead";
            console.log(`${this.name} is almost dead at ${this.location} fighting ${this.monster} at ${this.time}.`);
            // Modify game settings when character is almost dead
            console.log("Tip: have you tried a new defensive item recently?")
        } else {
            return this.health && this.status = "alive"
        }
        }

        this.history.push({
            status: this.status,
            location: this.location,
            time: this.time,
            monster: this.monster
        });
    }


// example only
character.updateStatus("Forest", "Goblin");
