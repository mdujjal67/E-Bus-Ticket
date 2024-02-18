const reservationButtons = document.querySelectorAll('.reservation-button');
const totalSeatElement = document.getElementById('seat-decrease');
const updateSeatElement = document.getElementById('seat-increase');
const updatedDetailsElement = document.getElementById('updated-details');
const updateTotalAmount = document.getElementById('total-price-amount');

let clickedCount = 0;
let totalSeats = 40;
let initialSeats = 0;
let initialAmount = 0;

// Adding the click event listener to each button
for (const button of reservationButtons) {
    button.addEventListener('click', () => {
        if (clickedCount < 4 && !button.disabled) {
            clickedCount++;
            button.disabled = true;

            // Update button text to show it's clicked
            button.style.backgroundColor = '#1DD100';
            button.style.color = 'white';

            // decrease seat number from total seat left
            totalSeats--;
            totalSeatElement.innerText = totalSeats;

            // increase seat number to seat number
            initialSeats++;
            updateSeatElement.innerText = initialSeats;

            //update the total amount
            initialAmount++;
            totalMoney = initialAmount * 550;
            updateTotalAmount.innerText = totalMoney;

            // seat details after clicking seat button
            const seatNumber = document.createElement('p');
            seatNumber.innerText = 'C2';
            updatedDetailsElement.appendChild(seatNumber);

            const seatClass = document.createElement('p');
            seatClass.innerText = 'Economy';
            seatClass.style.marginRight = '60px';
            seatClass.style.marginLeft = '100px';
            updatedDetailsElement.appendChild(seatClass);

            const seatPrice = document.createElement('p');
            seatPrice.innerText = '550';
            updatedDetailsElement.appendChild(seatPrice);
            seatPrice.style.marginLeft = '20px';
        } else {
            alert('Sorry! Try another time.');
        }
    });
}

