function MinimumValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Example test
console.log(MinimumValue([10, 15, 8, 6, 12])); // 6
