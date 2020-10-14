module.exports = {
  success,
  fail,
  repair,
  get,
};

function success(item) {
  // let newEnhancement = item.enhancement +1
  return ( item.enhancement < 20 ? { ...item, enhancement: item.enhancement + 1} : { ...item, enhancement: 20 });
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
