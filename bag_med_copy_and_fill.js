// Expected result :  [7, 7, 7, 6, 92, 11]
// Direction : copy arr1 last three of element without removing default length and fill the rest value with 7

const arr1 = [12, 24, 51, 6, 92, 11];

function result(arr1) {
  // Your Code Here
  const last = arr1.slice(-3);
  const rest = Array(arr1.length - 3).fill(7);

  return rest.concat(last);
}

console.log(result(arr1));
