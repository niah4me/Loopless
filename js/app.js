      // JavaScript function to print numbers recursively
      function printNumbers(n, current = 1) {
        if (current > n) {
            return;
        }
        // Display current number in the output
        document.getElementById("output").innerHTML += current + "<br>";
        // Call the function recursively
        printNumbers(n, current + 1);
    }

    // Function to handle input and start printing
    function handleInput() {
        var N = parseInt(document.getElementById("number").value);
        document.getElementById("output").innerHTML = ""; // Clear previous output
        if (isNaN(N) || N <= 0) {
            alert("Please enter a valid positive number.");
            return;
        }
        printNumbers(N);
    }