// 

class Item {
  constructor(name) {
    this.name = name;
    this.availableItems = []; 
  }

  addItems(items) {
    this.availableItems = this.availableItems.concat(items); 
  }

  removeRandomItem() {
    if (this.availableItems.length === 0) {
      return null;
    }

    const randomIndex = Math.floor(Math.random() * this.availableItems.length);
    const removedItem = this.availableItems.splice(randomIndex, 1)[0];
  }

  continue() {
    while (this.availableItems.length > 1) {
      const removedItem = this.removeRandomItem();
      console.log(`Removed item: ${removedItem}`);
    }

    const lastItem = this.availableItems[0]; 
    this.availableItems = []; 
    return lastItem;
  }
}


const item = new Item("Items");
item.addItems(["Item 1", "Item 2", "Item 3", "Item 4"]);

const lastItem = item.continue();
console.log(`Last item: ${lastItem}`);
