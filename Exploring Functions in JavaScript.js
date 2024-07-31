// Define a bank account with a balance
let bankAccount = {
  balance: 0,
};

// Task 1: Create a function to handle deposits
function deposit(amount) {
  bankAccount.balance += amount;
  console.log(`Deposit successful. Your new balance is $${bankAccount.balance}.`);
}

// Task 2: Implement a function to handle withdrawals
function withdraw(amount) {
  if (amount > bankAccount.balance) {
    console.log('Insufficient balance for this withdrawal.');
  } else {
    bankAccount.balance -= amount;
    console.log(`Withdrawal successful. Your new balance is $${bankAccount.balance}.`);
  }
}

// Task 3: Develop a function to check the balance
function checkBalance() {
  console.log(`Your current balance is $${bankAccount.balance}.`);
}

// Test the functions
deposit(1000);  // Depositing \$1000 into the account
withdraw(500);  // Trying to withdraw \$500 from the account
checkBalance(); // Checking the current balance
