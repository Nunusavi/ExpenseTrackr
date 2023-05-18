  // Example JavaScript code for calculating the financial status and updating the indicator
  var totalExpenses = 500; // Replace with actual logic to calculate the total expenses
  var totalIncome = 1000; // Replace with actual logic to calculate the total income

  var indicatorElement = document.querySelector('.indicator');

  if (totalExpenses > totalIncome) {
    indicatorElement.textContent = 'Losing Money';
    indicatorElement.classList.add('losing');
    indicatorElement.classList.remove('saving');
  } else {
    indicatorElement.textContent = 'Saving Money';
    indicatorElement.classList.add('saving');
    indicatorElement.classList.remove('losing');
  }

