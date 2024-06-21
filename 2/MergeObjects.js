function mergeObjects(obj1, obj2) {
  const mergedObj = Object.assign({}, obj1, obj2);
  return mergedObj;
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
