const one = [2, 5, 7];
const two = [1, 3, 6];
const merged = [];
let i, j;
// TODO: last element doesn't go in eg 7 from array one
for (i = 0, j = 0; i < one.length, j < two.length; 0) {
  if (one[i] < two[j]) {
    merged.push(one[i]);
    i++;
  } else {
    merged.push(two[j]);
    j++;
  }
}

console.log({ merged });
