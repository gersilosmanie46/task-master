Here's an example of a Javascript code that generates the Fibonacci sequence up to a given number:

```javascript
// fibonacci_sequence.js

/**
 * Generate Fibonacci sequence up to a given number
 * @param {number} limit - The maximum number to generate the sequence up to
 * @returns {array} - The Fibonacci sequence up to the given limit
 */
function generateFibonacciSequence(limit) {
  let sequence = [0, 1];

  for (let i = 2; i <= limit; i++) {
    const nextNumber = sequence[i - 1] + sequence[i - 2];
    if (nextNumber <= limit) {
      sequence.push(nextNumber);
    } else {
      break;
    }
  }

  return sequence;
}

/**
 * Display the Fibonacci sequence
 * @param {array} sequence - The Fibonacci sequence to display
 */
function displayFibonacciSequence(sequence) {
  console.log("Fibonacci Sequence:");
  console.log(sequence.join(", "));
}

// Generate and display the Fibonacci sequence up to 100
const limit = 100;
const fibonacciSequence = generateFibonacciSequence(limit);
displayFibonacciSequence(fibonacciSequence);
```

In this code, we have a `generateFibonacciSequence` function that accepts a limit parameter which specifies the maximum number to generate the Fibonacci sequence up to. The function uses a loop to calculate the next Fibonacci number until it reaches the limit, and then returns the resulting sequence.

We also have a `displayFibonacciSequence` function that simply logs the Fibonacci sequence to the console.

Finally, we call the `generateFibonacciSequence` function with a limit of 100, store the result in `fibonacciSequence` variable, and then display it using `displayFibonacciSequence`.