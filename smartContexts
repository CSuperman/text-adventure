const npc = {
    religion: "muslim",
};

const char = {
    ethicalAlignment: "good",
    reputation: 1,  // others - lvl 2 or 3
};

const inventory = {
    items: {
        bible: true,
        religiousTexts: false,
    },
};

function interactWithNPC() {

    if (npc.religion === null || char.ethicalAlignment === null || inventory.items.bible === null) {
        console.log("NPC: Who are YOU?");
        return;
    }

    if (char.ethicalAlignment === "bad" && !inventory.items.bible && !inventory.items.religiousTexts) {
        console.log("NPC: You came to me and do not appear to be a part of any godly religion.");
        console.log("NPC: Do you wish to go through the trials to join us: yes or no?");

    } else if (char.ethicalAlignment === "good" && npc.religion !== char.religion) {
        console.log("NPC: You are not one of us. You chose wrong, but it seems you are a good soul.");
        console.log("NPC: I will provide you some assistance. What 1 thing do you want?");

    } else if (npc.religion === "muslim" && char.ethicalAlignment === "bad" && inventory.items.bible) {
        console.log("You want to do business with me, eh?");
        // SCAM actions
        char.reputation--;
    }
}

interactWithNPC();
