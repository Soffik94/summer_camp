function objectToQueryString(obj) {
  let queryString = Object.entries(obj) //convert every key:value couple to element of arr [[key, value][key, value]]
    .map(([key, value]) => `${key}=${value}`) //connecting elements to one arr [key=value, key=value]
    .join("&"); //join elements of arr to string and separates them by &

  return queryString;
}
console.log(objectToQueryString({ name: "John", age: 30 }));
