function handleTicketChange(ticket, isIncrease) {

    const ticketCount = getInputValue(ticket);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }

    document.getElementById(ticket + '-count').value = ticketNewCount;

    calculateTotal();
}


function calculateTotal() {
    const firstClassCount = getInputValue('first-class');
    const economyCount = getInputValue('economy');
    const totalPrice = firstClassCount * 150 + economyCount * 100;
    document.getElementById('total-price').innerText = '$' + totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText ='$' + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById('grand-total').innerText ='$' + grandTotal;
}

function getInputValue(ticket) {
    let ticketCount;
    const ticketInput = document.getElementById(ticket + '-count');
    if (ticketInput.value == "") {
        ticketCount = 0;
    } else {
        ticketCount = parseInt(ticketInput.value);
    }
    return ticketCount;
}

function confirmBooking(){
    document.getElementById("buy-ticket").style.display="none";
    document.getElementById("confirmation").style.display="block";
    
        
}