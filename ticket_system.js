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

    // Basic validation for coupon code
    if (!isValidCouponCode(couponCode)) {
        alert('Invalid coupon code. Please enter the correct coupon.');
        couponInput.focus();
        return;
    }

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


// --------------Modal section javascript functions---------------

// Add event listener to the "send" button to show modal part and also hide sit booking part
document.getElementById('next-btn').addEventListener('click', function() {
    // Hide the send button section
    const sendButtonSection = document.getElementById('sit-booking');
    sendButtonSection.classList.add('hidden');
  
    // Show the modal message
    const modalMessage = document.getElementById('modal-message');
    modalMessage.classList.remove('hidden');
  });
  
  
  document.getElementById('continue-btn').addEventListener('click', function() {
    // Hide the send modal part
    const sendButtonSection = document.getElementById('modal-message');
    sendButtonSection.classList.add('hidden');
  
    // Show the modal message
    const modalMessage = document.getElementById('sit-booking');
    modalMessage.classList.remove('hidden');
  });