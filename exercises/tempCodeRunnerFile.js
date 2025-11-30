function filter(arr, fn) {
  // TODO: Implement this function
  const result = [];  
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;  
  
}