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
    var From = document.getElementById('from').value;
    var To = document.getElementById('to').value;
    var Departure = document.getElementById('departure').value;
    var Return = document.getElementById('return').value;
    var Cost = document.getElementById('grand-total').innerText;
    if(From == null ||From == "" && To == null || To == "" && Departure == null || Departure == "" && Return == null || Return == "" && Cost <= 0){
        alert("You must fill all required field!!");
    }
    else{
    document.getElementById("buy-ticket").style.display="none";
    document.getElementById("confirmation").style.display="block";
    document.getElementById('confirmation-from').innerText = From;
    document.getElementById('confirmation-to').innerText = To;
    document.getElementById('confirmation-departure').innerText = Departure;
    document.getElementById('confirmation-return').innerText = Return;
    document.getElementById('confirmation-cost').innerText = Cost;
    }
    
        
}