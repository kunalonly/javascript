let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 23, 4, 5, 6];

let length = arr.length;

console.log(length);

if (length === 0) {
  console.log("array is empty");
} else if (length < 5) {
  console.log("small");
} else if (length < 10) {
  console.log("medium");
} else {
  console.log("large");
}
