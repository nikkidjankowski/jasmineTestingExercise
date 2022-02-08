window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
  console.log(amount, years);
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = { amount: 10000, years: 4, rate: 5.5};
  const amountInput = document.getElementById("loan-amount");
  amountInput.value = values.amount;
  const yearsInput = document.getElementById("loan-years");
  yearsInput.value = values.years;
  const rateInput = document.getElementById("loan-rate");
  rateInput.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentVal = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentVal));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const i = ((values.rate/100)/12);
  const n = Math.floor(values.years * 12);
  return (
    ((i * values.amount)/(1 - (1 + i)**(-n))).toFixed(2)
  );
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const printMP = document.getElementById("monthly-payment");
  //const currentPay = calculateMonthlyPayment();
  //console.log(currentPay);
  printMP.innerText = "$" + monthly;
}
