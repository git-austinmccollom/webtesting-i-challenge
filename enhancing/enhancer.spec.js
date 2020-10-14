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
});