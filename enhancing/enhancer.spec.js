const { test, expect } = require('@jest/globals');
const enhancer = require('./enhancer.js');
// test away!

// when testing async code, you will get lots of false positives

// User stories:
// AS A _______, I WANT _____, SO THAT ________________ : role, feature, valueToNode
// Scenarios
// GIVEN ______ [AND_____], WHEN ________ [AND ______], THEN ______ [AND_____]

describe('enhancer.js', () => {  
    describe('repair()', () => {
        test('should take an object and return an object with durability 100', () => {
            // Arrange - setup
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 0
            }
            
            // Act - execute the code under test
            const newItem = enhancer.repair(item)
            
            //Assert - check your assumptions
            expect(newItem.durability).toBe(100);
        });
    })

    describe('success()', () => {
        test('accepts item and returns item with enhancement +1, or no change if enhancement is 20', () => {
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 0
            }
            
            const newItem = enhancer.success(item)
            
            expect(newItem.enhancement).toBe(1)
            expect(newItem.durability).toBe(50)
        });
        test('does not increment when enhancement is already 20', () => {
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 20
            }
            
            const newItem = enhancer.success(item)
            
            expect(newItem.enhancement).toBe(20)
            expect(newItem.durability).toBe(50)
        })
    })
    
    describe('fail()', () => {
        test('if enhancement is less than 15, durability of the item is decreased by 5', () => {
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 5
            }
            
            const newItem = enhancer.fail(item)

            expect(newItem.durability).toBe(45)
        })

        test('if enhancement is greater than 15, the durability should decrease by 10', () => {
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 15
            }
            
            const newItem = enhancer.fail(item)

            expect(newItem.durability).toBe(40)
            expect(newItem.enhancement).toBe(15)
        })

        test('if enhancement is greater than 16, the enhancement level decreases by 1', () => {
            const item = {
                name: "mithril armor",
                durability: 50,
                enhancement: 17
            }
            
            const newItem = enhancer.fail(item)

            expect(newItem.enhancement).toBe(16)
        })
    })
});