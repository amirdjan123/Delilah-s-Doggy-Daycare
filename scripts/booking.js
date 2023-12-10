
// Variables to store the cost per day and the total number of days selected
var costPerDay = 29.99; // Placeholder value, adjust as necessary
var totalDaysSelected = 0;
var totalCost = 0;

// Function to update the total cost display
function updateTotalCost() {
    totalCost = totalDaysSelected * costPerDay;
    document.getElementById('total-cost').textContent = 'Total Cost: $' + totalCost.toFixed(2);
}

// Function to handle day selection
function handleDayClick(dayElement) {
    if (dayElement.classList.contains('clicked')) {
        dayElement.classList.remove('clicked');
        totalDaysSelected--;
    } else {
        dayElement.classList.add('clicked');
        totalDaysSelected++;
    }
    updateTotalCost();
}

// Function to clear all selections
function clearSelections() {
    var selectedDays = document.querySelectorAll('.clicked');
    selectedDays.forEach(function(day) {
        day.classList.remove('clicked');
    });
    totalDaysSelected = 0;
    updateTotalCost();
}

// Function to adjust rates between half and full days
function adjustRate(isHalfDay) {
    costPerDay = isHalfDay ? 14.99 : 29.99;
    updateTotalCost();
}

// Adding event listeners to day selectors
var daySelectors = document.querySelectorAll('.day-selector');
daySelectors.forEach(function(day) {
    day.addEventListener('click', function() { handleDayClick(day); });
});

// Adding event listener to the clear days button
document.getElementById('clear-days').addEventListener('click', clearSelections);

// Adding event listeners for rate adjustment (assuming there are radio buttons for half/full day)
document.getElementById('half-day').addEventListener('click', function() { adjustRate(true); });
document.getElementById('full-day').addEventListener('click', function() { adjustRate(false); });
