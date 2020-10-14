const { it } = require("@jest/globals");

module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  // let newEnhancement = item.enhancement +1
  return ( item.enhancement < 20 ?
    { ...item, enhancement: item.enhancement + 1}
    : { ...item, enhancement: 20 });
}

function fail(item) {
  if ( item.enhancement < 15) {
    return { ...item, durability: item.durability - 5 };
  } else if ( 16 < item.enhancement) {
    return { ...item, durability: item.durability - 10, enhancement: item.enhancement - 1 }
  } else if ( 15 <= item.enhancement < 17 ) {
    return { ...item, durability: item.durability - 10 };
  } else {
    return { errMessage: "edge case in the fail() method. Item's enhancement is not between 0 and 20"}
  }
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
