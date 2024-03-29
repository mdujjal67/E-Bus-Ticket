const reservationButtons = document.querySelectorAll('.reservation-button');
const totalSeatElement = document.getElementById('seat-decrease');
const updateSeatElement = document.getElementById('seat-increase');
const updatedDetailsElement = document.getElementById('updated-details');
const updateTotalAmount = document.getElementById('total-price-amount');
const grandTotalElement = document.getElementById('grand-total-amount');

let clickedCount = 0;
let totalSeats = 40;
let initialSeats = 0;
let initialAmount = 0;
let initialGrandTotal = 0;
let selectedSeatNumber = '';

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
            
            // update the grand total amount beside the total amount
            initialGrandTotal++;
            grandTotal = initialAmount * 550;
            grandTotalElement.innerText = grandTotal;

            // set seat details after clicking seat button
            const seatNumber = document.createElement('p');
            seatNumber.innerText = button.innerText;
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
        } 
        else {
            alert('Sorry! Try another time.');
        }
    });
}

// ---------------Coupon section javascript functions----------------

// Function to calculate the discount based on coupon code
function calculateDiscount(couponCode, originalTotalPrice) {
    if (couponCode === 'NEW15') {
        return originalTotalPrice * 0.15;
    } 
    else if (couponCode === 'Couple 20') {
        return originalTotalPrice * 0.20;
    } 
    else {
        return 0;
    }
}

// Function to update the grand total price
function updateGrandTotal(discount, originalTotalPrice) {
    const grandTotalElement = document.getElementById('grand-total-amount');
    const grandTotalPrice = originalTotalPrice - discount;
    if (!isNaN(grandTotalPrice)) {
        grandTotalElement.innerText = grandTotalPrice.toFixed(2);
    } 
}

// Function to handle the coupon application
function applyCoupon() {
    const couponInput = document.getElementById('coupon-input');
    const couponCode = couponInput.value;
    const totalPriceElement = document.getElementById('total-price-amount');
    const hideCouponApplyField = document.getElementById('coupon-apply-field');

    // clear the coupon input field after browser reload
    const inputFields = document.querySelectorAll('#coupon-apply-field input');
    for(let i = 0; i < inputFields.length; i++){
        const fieldType = inputFields[i].type.toLowerCase();
        if(fieldType === 'text'){
            inputFields[i].value = '';
        }
    }

    // Basic validation for coupon code
    if (!isValidCouponCode(couponCode)) {
        alert('Invalid coupon code. Please enter the correct coupon.');
        couponInput.focus();
        return;
    }

    // hide the coupon apply field and button
    const originalTotalPrice = parseFloat(totalPriceElement.innerText);
    const discount = calculateDiscount(couponCode, originalTotalPrice);
    updateGrandTotal(discount, originalTotalPrice);
    hideCouponApplyField.style.display = 'none';
}

// Function to check for valid coupon codes
function isValidCouponCode(couponCode) {
    return ['NEW15', 'Couple 20'].includes(couponCode);
}

// Add event listener on the coupon apply button
document.getElementById('coupon-apply-button').addEventListener('click', applyCoupon);


// -----------------Modal section javascript functions-------------------

document.getElementById('next-btn').addEventListener('click', function() {
    const sendButtonSection = document.getElementById('sit-booking');
    const phoneNumberInput = document.getElementById('number-input');

        // hide the input field part using condition
    if (clickedCount >= 1 && phoneNumberInput.value.trim() !== '') {
        sendButtonSection.classList.add('hidden');

        // show the modal message part
        const modalMessage = document.getElementById('modal-message');
        modalMessage.classList.remove('hidden');
    } 
    else {
        alert('Please select at least one seat and provide your phone number.');
    }
});

document.getElementById('continue-btn').addEventListener('click', function() {
    // Show the input fields part
    const sendButtonSection = document.getElementById('modal-message');
    sendButtonSection.classList.add('hidden');
  
    // Hide the modal message part
    const modalMessage = document.getElementById('sit-booking');
    modalMessage.classList.remove('hidden');

    // clear the input fields after return to the sit booking part
    const inputFields = document.querySelectorAll('#passenger-form input');
    for(let i = 0; i < inputFields.length; i++){
        const fieldType = inputFields[i].type.toLowerCase();
        if(fieldType === 'text' || fieldType === 'email' || fieldType === 'number'){
            inputFields[i].value = '';
        }
    }

    // reload the browser after return to the sit booking part
    setTimeout(function(){
        window.location.reload();
    }, 100);
  });