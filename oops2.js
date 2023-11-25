function mineFilter(arr, callback) {
    let filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) {
        filteredArr.push(arr[i]);
      }
    }
    return filteredArr;
  }
  
  function mineReduce(arr, callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : arr[0];
    let startingIndex = initialValue !== undefined ? 0 : 1;
  
    for (let i = startingIndex; i < arr.length; i++) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  
    return accumulator;
  }
  
  function mineMap(arr, callback) {
    let mappedArr = [];
    for (let i = 0; i < arr.length; i++) {
      mappedArr.push(callback(arr[i]));
    }
    return mappedArr;
  }
  const numbers = [1, 2, 3, 4, 5];
  const filteredNumbers = mineFilter(numbers, num => num % 2 === 0);
  console.log(filteredNumbers); 
  const sum = mineReduce(numbers, (acc, curr) => acc + curr, 0);
  console.log(sum);
  
  const multipliedNumbers = mineMap(numbers, num => num * 2);
  console.log(multipliedNumbers); 