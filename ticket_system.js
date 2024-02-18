const reservationButtons = document.querySelectorAll('.reservation-button');
const totalSeatElement = document.getElementById('seat-decrease');
const updateSeatElement = document.getElementById('seat-increase');

let clickedCount = 0;
let totalSeats = 40;
let initialSeats = 0;

// Adding the click event listener to each button
for (const button of reservationButtons){
  button.addEventListener('click', () => {
    if (clickedCount < 4) {
        clickedCount++;
        button.disabled = true;
      // Update button text to show it's clicked
        button.style.backgroundColor = '#1DD100';
        button.style.color = 'white';
        totalSeats --;
        totalSeatElement.innerText = totalSeats;
        initialSeats ++;
        updateSeatElement.innerText = initialSeats;
    } else {
      alert('Sorry! you can only reserve 4 tickets at a time.');
    }
  });
};


