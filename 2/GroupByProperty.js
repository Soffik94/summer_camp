function groupByProperty(arr, prop) {
  const map = new Map();
  arr.forEach((obj) => {
    const key = obj[prop];
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(obj);
  });
  const result = Object.fromEntries(map.entries());
  return result;
}

console.log(
  groupByProperty(
    [
      { name: "Alice", age: 25 },
      { name: "Bob", age: 30 },
      { name: "Charlie", age: 25 },
    ],
    "age"
  )
);
