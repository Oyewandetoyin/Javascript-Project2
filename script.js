// REVERSE A STRING

function reverseString(str) {
    return str.split("").reverse().join("");
  }

  // COUNT CHARACTERS


  function countCharacters(str) {
    return str.length;
  }


  // CAPITALIZE WORDS

  function capitalizeWords(str) {
    return str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }

  // ARRAY FUNCTIONS

  // 1. FIND MAXIMUM AND MINIMUM

  function findMax(arr) {
    return Math.max(...arr);
  }
  
  function findMin(arr) {
    return Math.min(...arr);
  }

  // 2. SUM OF ARRAYS

  function sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
  }

  // 3. FILTER ARRAY

  function filterArray(arr, condition) {
    return arr.filter(condition);
  }

  // MATHEMATICAL FUNCTIONS

  // 1. FACTORIAL

  function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
  }

  // 2. PRIME NUMBER CHECK

  function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) return false;
    }
    return true;
  }

  // 3. FIBONACCI SEQUENCE
  
  function fibonacci(n) {
    let a = 0, b = 1, result = [];
    for (let i = 0; i < n; i++) {
      result.push(a);
      [a, b] = [b, a + b];
    }
    return result;
  }