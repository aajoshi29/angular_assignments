var fruits = ["Apple", "Dragon Fruit", "Banana", "Cherry"];
console.log("fruits array before sorting in alphabetical order: ");
console.log(fruits);
console.log("fruits array after sorting in alphabetical order: ");
fruits.sort();
console.log(fruits);
console.log();
var names = ["Alex", "Bob", "Charlie", "David", "Eve"];
console.log("names array before sorting in increasing order of their length: ");
console.log(names);
console.log("names array after sorting in increasing order of their length: ");
names.sort(function (s1, s2) { return s1.length - s2.length; });
console.log(names);
console.log();
names = ["Alex", "Bob", "Charlie", "David", "Eve"];
console.log("names array before sorting in decreasing order of their length: ");
console.log(names);
console.log("names array after sorting in decreasing order of their length: ");
names.sort(function (s1, s2) { return s2.length - s1.length; });
console.log(names);
