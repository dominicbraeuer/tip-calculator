interface Question {
  checkAmount: number;
  tipPercentage: number;
  splitBill: boolean;
  numberOfPeople: number | undefined;
}

interface AnswerYesNo {
  answer: "yes" | "no";
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function question(prompt: string): Promise<string> {
  return new Promise((resolve) => rl.question(prompt, resolve));
}

async function getValidCheckAmount(): Promise<number> {
  while (true) {
    const checkAmountInput = await question(
      "How high is the check? (e.g., 50.00): "
    );
    const checkAmount = parseFloat(checkAmountInput);

    if (isNaN(checkAmount) || checkAmount <= 0) {
      console.log(
        "Invalid check amount. Please enter a valid positive number."
      );
      continue;
    }
    return checkAmount;
  }
}

async function getValidTipPercentage(): Promise<number> {
  while (true) {
    const tipPercentageInput = await question(
      "What percentage would you like to tip? (e.g., 15 for 15%): "
    );
    const tipPercentage = parseFloat(tipPercentageInput);

    if (isNaN(tipPercentage) || tipPercentage < 0) {
      console.log(
        "Invalid tip percentage. Please enter a non-negative number."
      );
      continue;
    }
    return tipPercentage;
  }
}

async function getValidYesNoAnswer(prompt: string): Promise<AnswerYesNo> {
  while (true) {
    const input = await question(prompt);
    const answer = input.trim().toLowerCase();

    if (answer === "yes" || answer === "no") {
      return { answer: answer as "yes" | "no" };
    }
    console.log("Invalid response. Please answer 'yes' or 'no'.");
  }
}

async function getValidNumberOfPeople(): Promise<number> {
  while (true) {
    const numberOfPeopleInput = await question(
      "Enter the number of people to split the bill: "
    );
    const numberOfPeople = parseInt(numberOfPeopleInput, 10);

    if (isNaN(numberOfPeople) || numberOfPeople <= 1) {
      console.log(
        "Invalid number of people. Please enter a number greater than 1."
      );
      continue;
    }
    return numberOfPeople;
  }
}

async function collectQuestionData(): Promise<Question> {
  const checkAmount = await getValidCheckAmount();
  const tipPercentage = await getValidTipPercentage();

  const splitBillAnswer = await getValidYesNoAnswer(
    "Would you like to split the bill? (yes/no): "
  );
  const splitBill = splitBillAnswer.answer === "yes";

  let numberOfPeople;
  if (splitBill) {
    numberOfPeople = await getValidNumberOfPeople();
  }

  return {
    checkAmount,
    tipPercentage,
    splitBill,
    numberOfPeople,
  };
}

async function tipCalculation() {
  console.log("== Tip Calculator ==");

  // Collect all input data using interfaces
  const questionData: Question = await collectQuestionData();

  // Calculate tip and total amounts
  const tipAmount =
    (questionData.checkAmount * questionData.tipPercentage) / 100;
  const totalAmount = questionData.checkAmount + tipAmount;
  const numberOfPeople = questionData.numberOfPeople || 1;
  const amountPerPerson = totalAmount / numberOfPeople;

  // Display results
  console.log("\n--- Tip Calculation Summary ---");
  console.log(`Check Amount: $${questionData.checkAmount.toFixed(2)}`);
  console.log(`Tip Percentage: ${questionData.tipPercentage}%`);
  console.log(`Tip Amount: $${tipAmount.toFixed(2)}`);
  console.log(`Total Bill: $${totalAmount.toFixed(2)}`);
  console.log(`Divide among people: ${questionData.splitBill ? "yes" : "no"}`);
  console.log(`Split between how many people: ${numberOfPeople}`);
  if (questionData.splitBill && questionData.numberOfPeople) {
    console.log(`Each person pays: $${amountPerPerson.toFixed(2)}`);
  }
  console.log("---");

  rl.close();
}

tipCalculation();
