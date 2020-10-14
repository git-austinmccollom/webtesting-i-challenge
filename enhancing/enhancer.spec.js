const enhancer = require('./enhancer.js');
// test away!



test('repair() should take an object and return an object with durability 100', () => {
    const item = {
        name: "mithril armor",
        durability: 50,
        enhancement: 0
    }

    const newItem = enhancer.repair(item)
    
    expect(newItem.durability).toBe(100);
});