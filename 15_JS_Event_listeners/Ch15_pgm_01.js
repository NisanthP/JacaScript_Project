// Generating numbers and marking evens, odds and prime numbers with three different colors. 

// See the image below.

//  https://github.com/Asabeneh/30-Days-Of-JavaScript/raw/master/images/projects/dom_min_project_number_generator_day_3.1.gif


document.addEventListener("DOMContentLoaded", function() {
    const numbersContainer = document.getElementById("numbersContainer");
  
    function generateNumbersAndClassify(count) {
        for (let i = 1; i <= count; i++) {
            const numberBox = document.createElement("div");
            numberBox.textContent = i;
            numberBox.classList.add("number-box");
            
            if (i % 2 === 0) {
                numberBox.classList.add("even");
            } else {
                numberBox.classList.add("odd");
            }
            if (isPrime(i)) {
                numberBox.classList.add("prime");
            }
  
            numbersContainer.appendChild(numberBox);
        }
    }
  
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        let i = 5;
        while (i * i <= num) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
            i += 6;
        }
        return true;
    }
  
    generateNumbersAndClassify(100);
  });