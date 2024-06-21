function mergeObjects(obj1, obj2) {
  return (mergedObj = ({}, obj1, obj2));
}
console.log(mergeObjects({ a: 1, b: 2 }, { b: 3, c: 4 }));
