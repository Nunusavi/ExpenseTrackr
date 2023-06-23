// Function to add an expense
function addExpense(event) {
    event.preventDefault(); // Prevent form submission
    var expenseName = document.getElementById("expenseName").value;
    var expenseAmount = document.getElementById("expenseAmount").value;
    var expenseDate = document.getElementById("expenseDate").value;
    // Check if all the form fields are filled out
    if (expenseName == "" || expenseAmount == "" || expenseDate == "") {
      alert("Please fill out all the fields");
      return;
    }

    // Create a new row in the expense table
    var expenseTable = document.getElementById("expenseTable").getElementsByTagName("tbody")[0];
    var newRow = expenseTable.insertRow();
    var nameCell = newRow.insertCell(0);
    var amountCell = newRow.insertCell(1);
    var dateCell = newRow.insertCell(2);

    nameCell.innerHTML = expenseName;
    amountCell.innerHTML = "$" + expenseAmount;
    dateCell.innerHTML = expenseDate;
    
    // Update the report table
    updateReportTable();
    document.getElementById("expenseName").value = "";
    document.getElementById("expenseAmount").value = "";
    document.getElementById("expenseDate").value = "";
  }

  // Function to add an income
  function addIncome(event) {
    event.preventDefault(); // Prevent form submission
    var incomeName = document.getElementById("incomeName").value;
    var incomeAmount = document.getElementById("incomeAmount").value;
    var incomeDate = document.getElementById("incomeDate").value;
    // check if all the form fields are filled out
    if (incomeName == "" || incomeAmount == "" || incomeDate == "") {
      alert("Please fill out all the fields");
      return;
    }
    // Create a new row in the income table
    var incomeTable = document.getElementById("incomeTable").getElementsByTagName("tbody")[0];
    var newRow = incomeTable.insertRow();
    var nameCell = newRow.insertCell(0);
    var amountCell = newRow.insertCell(1);
    var dateCell = newRow.insertCell(2);
    nameCell.innerHTML = incomeName;
    amountCell.innerHTML = "$" + incomeAmount;
    dateCell.innerHTML = incomeDate;
    // Update the report table
    updateReportTable();
    document.getElementById("incomeName").value = "";
    document.getElementById("incomeAmount").value = "";
    document.getElementById("incomeDate").value = "";
  }

  // Function to update the report table
  function updateReportTable() {
    var incomeTotal = 0;
    var expenseTotal = 0;

    // Calculate the total income
    var incomeTable = document.getElementById("incomeTable").getElementsByTagName("tbody")[0];
    var incomeRows = incomeTable.getElementsByTagName("tr");
    for (var i = 0; i < incomeRows.length; i++) {
      var amountCell = incomeRows[i].getElementsByTagName("td")[1];
      var amount = parseFloat(amountCell.innerHTML.substring(1));
      if (!isNaN(amount)) {
        incomeTotal += amount;
      }
    }

    // Calculate the total expense
    var expenseTable = document.getElementById("expenseTable").getElementsByTagName("tbody")[0];
    var expenseRows = expenseTable.getElementsByTagName("tr");
    for (var i = 0; i < expenseRows.length; i++) {
      var amountCell = expenseRows[i].getElementsByTagName("td")[1];
      var amount = parseFloat(amountCell.innerHTML.substring(1));
      if (!isNaN(amount)) {
        expenseTotal += amount;
      }
    }

    // Calculate the balance
    var balance = incomeTotal - expenseTotal;

    // Update the report table
    var reportTable = document.getElementById("reportTable").getElementsByTagName("tbody")[0];
    var reportRow = reportTable.getElementsByTagName("tr")[0];
    var incomeCell = reportRow.getElementsByTagName("td")[0];
    var expenseCell = reportRow.getElementsByTagName("td")[1];
    var balanceCell = reportRow.getElementsByTagName("td")[2];

    incomeCell.innerHTML = "$" + incomeTotal;
    expenseCell.innerHTML = "$" + expenseTotal;
    balanceCell.innerHTML = "$" + balance;
  }




  // make a chart in the chart canvas
  var chart = document.getElementById('expenseChart').getContext('2d');
  var myChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ['Food'],
      datasets: [{
        label: 'Expense',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)',
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(75, 192, 192, 0.5)',
          'rgba(153, 102, 255, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Category'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  // make a income chart based on whats in the table in the chart canvas
  var chart = document.getElementById('incomeChart').getContext('2d');
  var myChart = new Chart(chart, {
    type: 'bar',
    data: {
      labels: ['Salary',],
      datasets: [{
        label: 'Income',
        data: [3000,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.5)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Source'
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Amount'
          },
          ticks: {
            beginAtZero: true
          }
        }]
      }
    }
  });
  