// Level 1

function outerFunction() {
    let message = "Hello, World!";
    function innerFunction() {
        return message;
    }
    return innerFunction;
}

const greet = outerFunction();
console.log(greet()); 


// Create a closure which has one inner function

// Level 2

function outerFunction() {
    let count = 0;
    function increment() {
        count++;
        return count;
    }
    function decrement() {
        count--;
        return count;
    }
    function reset() {
        count = 0;
        return count;
    }
    return {
        increment,
        decrement,
        reset
    };
}

const counter = outerFunction();
console.log(counter.increment()); 
console.log(counter.increment()); 
console.log(counter.decrement()); 
console.log(counter.reset()); 


// Create a closure which has three inner functions

// Level 3

function personAccount() {
    let firstname = "John";
    let lastname = "Doe";
    let incomes = [];
    let expenses = [];
    
    function totalIncome() {
        return incomes.reduce((sum, income) => sum + income.amount, 0);
    }

    function totalExpense() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    function accountInfo() {
        return `Name: ${firstname} ${lastname}, Total Income: $${totalIncome()}, Total Expenses: $${totalExpense()}`;
    }

    function addIncome(amount, description) {
        incomes.push({ amount, description });
    }

    function addExpense(amount, description) {
        expenses.push({ amount, description });
    }

    function accountBalance() {
        return totalIncome() - totalExpense();
    }

    return {
        totalIncome,
        totalExpense,
        accountInfo,
        addIncome,
        addExpense,
        accountBalance
    };
}

const myAccount = personAccount();
myAccount.addIncome(1000, "Salary");
myAccount.addIncome(200, "Freelance");
myAccount.addExpense(500, "Rent");
myAccount.addExpense(100, "Groceries");

console.log(myAccount.accountInfo());

console.log(myAccount.accountBalance()); 

// Create a personAccount out function. It has firstname, lastname, incomes, expenses inner 
// variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and 
// accountBalance inner functions. Incomes is a set of incomes and its description and 
// expenses is also a set of expenses and its description.