// Expected Result = 7
// Direction : Find median of this array
const input = [8, 7, 7, 9, 5, 4, 2, 9];

function result(input) {
  // Your Code Here
  const sorted = input.sort((a, b) => a - b);
  const median = Math.floor(sorted.length / 2);

  if (sorted.length % 2 === 1) {
    return sorted[median];
  }

  return (sorted[median - 1] + sorted[median]) / 2;
}

console.log(result(input));
