// Write your JavaScript here

// Hide checkbox and dollar bill values until later
document.getElementById("dollars-check").style.display = "none";
document.getElementById("text-checkbox").style.display = "none";
document.getElementById("twenty").style.display = "none";
document.getElementById("ten").style.display = "none";
document.getElementById("five").style.display = "none";
document.getElementById("one").style.display = "none";
document.getElementById("total-dollars").style.display = "none";
document.getElementById("total-coins").style.display = "none";
document.getElementById("quarters").style.display = "none";
document.getElementById("nickels").style.display = "none";
document.getElementById("dimes").style.display = "none";
document.getElementById("pennies").style.display = "none";



// Function to calculate change due
function calculateChange(a,b) {
    return a - b;
}

//Function to return result of total change due
function totalChangeDue(){
    var totalCost = document.getElementById("amount-due").value;
    var customerPaid = document.getElementById("amount-received").value;
    var result = calculateChange(customerPaid,totalCost);
    return result.toFixed(2);
}


// Function to show message with total change due
function totalChangeMessage() {
    var result = totalChangeDue();
    var totalChangeMessage = document.getElementById("result-message").innerHTML="Total change due is $" + result + ".";
    return totalChangeMessage;
}

// Function for change in dollars
function dollarsChange() {
    var result = totalChangeDue();
    var string = result.toString();
    return string.slice(0, -3);
};


// Function to show message for change in dollars
function dollarsMessage () {
    var dollarsReturn = dollarsChange();
    // var dollarsMessage = document.getElementById("dollars-output").innerHTML="Return " + dollarsReturn + " dollars.";
    var dollarsMessage = document.getElementById("dollars-output").innerHTML=dollarsReturn;
    return dollarsMessage;
}



// Function to show change for coins - E.g. $11.38 will return 38 for 38 cents
function coinsChange() {
    var result = totalChangeDue();
    var string = result.toString();
    return string.slice(-2)
}

// Function for number of quarters needed
function quartersNeeded() {
    var cents = Number(coinsChange());
    if (cents < 25) {
        return 0
    }
    else {
        return Math.floor(cents/25);
    }
}


// Function for message displaying quarters needed
function quartersMessage() {
    var quartersReturn = quartersNeeded();
    // var quartersMessage = document.getElementById("quarters-output").innerHTML="Return " + quartersReturn + " quarters.";
    var quartersMessage = document.getElementById("quarters-output").innerHTML=quartersReturn;
    return quartersMessage
}


// Function for change after quarters
function leftoverCents() {
    var cents = Number(coinsChange());
    var quartersTaken = quartersNeeded() * 25;
    return cents - quartersTaken;
}

// Function for number of dimes needed
function dimesNeeded() {
    var leftover = leftoverCents();
    if (leftover < 10) {
        return 0;
    }
    else {
        return Math.floor(leftover/10);
    }
}

// Function for message displaying dimes needed
function dimesMessage() {
    var dimesReturn = dimesNeeded();
    // var dimesMessage = document.getElementById("dimes-output").innerHTML="Return " + dimesReturn + " dimes.";
    var dimesMessage = document.getElementById("dimes-output").innerHTML=dimesReturn;
    return dimesMessage;
}


// Function for change after dimes
function leftoverCents2() {
    var centsAfterQuarters = leftoverCents();
    var dimesTaken = dimesNeeded() * 10;
    var centsAfterDimes = centsAfterQuarters - dimesTaken;
    return centsAfterDimes;
}


// Function for number of nickels needed
function nickelsNeeded() {
    var leftover = leftoverCents2();
    if (leftover < 5) {
        return 0;
    }
    else {
        return Math.floor(leftover/5);
    }
}

// Function for message displaying nickels needed
function nickelsMessage() {
    var nickelsReturn = nickelsNeeded();
    // var nickelsMessage = document.getElementById("nickels-output").innerHTML="Return " + nickelsReturn + " nickels.";
    var nickelsMessage = document.getElementById("nickels-output").innerHTML=nickelsReturn;
    return nickelsMessage;
}


// Function for change after nickels
function leftoverCents3() {
    var centsAfterDimes = leftoverCents2();
    var nickelsTaken = nickelsNeeded() * 5;
    var centsAfterNickels = centsAfterDimes - nickelsTaken;
    return centsAfterNickels
}

// Function for number of pennies needed
function penniesNeeded() {
    var leftover = leftoverCents3();
    if (leftover < 1) {
        return 0;
    }
    else {
        return Math.floor(leftover/1);
    }
}

// Function for message displaying pennies needed
function penniesMessage() {
    var penniesReturn = penniesNeeded();
    // var penniesMessage = document.getElementById("pennies-output").innerHTML="Return " + penniesReturn + " pennies.";
    var penniesMessage = document.getElementById("pennies-output").innerHTML=penniesReturn;
    return penniesMessage;
}




// Combining all the above functions so they run on the click event
function handleClickEvent(e) {
    if (document.getElementById("amount-due").value == "") {
        alert("ERROR - Please enter a number in both fields");
    }
    else if (document.getElementById("amount-received").value == "") {
        alert("ERROR - Please enter a number in both fields");
    }
    else if (isNaN(totalChangeDue()) == true) {
        alert("ERROR - Please enter a valid number");
    }
    else {
        totalChangeMessage();
        dollarsMessage();
        quartersMessage();
        dimesMessage();
        nickelsMessage();
        penniesMessage();
        document.getElementById("total-dollars").style.display = "initial";
        document.getElementById("total-coins").style.display = "initial";
        document.getElementById("quarters").style.display = "initial";
        document.getElementById("nickels").style.display = "initial";
        document.getElementById("dimes").style.display = "initial";
        document.getElementById("pennies").style.display = "initial";
        document.getElementById("card2").className = "card is-visible";
        document.getElementById("card3").className = "card is-visible";
        showCheckbox();
    }
   
}

// Function to have click show the total change due
document.getElementById("calculate-change").onclick = handleClickEvent;




// BONUS - Show which dollar bills to give from $20s, $10s, $5s, $1s

// Function for showing hidden elements

function showCheckbox() {
    document.getElementById("dollars-check").style.display = "initial";
    document.getElementById("text-checkbox").style.display = "initial";
}

// Function to show dollar bills at check box
function handleCheckBox() {
    document.getElementById("twenty").style.display = "initial";
    document.getElementById("ten").style.display = "initial";
    document.getElementById("five").style.display = "initial";
    document.getElementById("one").style.display = "initial";
    document.getElementById("twenty-bills").style.display = "initial";
    document.getElementById("ten-bills").style.display = "initial";
    document.getElementById("five-bills").style.display = "initial";
    document.getElementById("one-bills").style.display = "initial";
    twentiesMessage();
    tensMessage();
    fivesMessage();
    onesMessage();
}

// Function to hide dollar bills if box is unchecked
function hideAgain() {
    document.getElementById("twenty").style.display = "none";
    document.getElementById("ten").style.display = "none";
    document.getElementById("five").style.display = "none";
    document.getElementById("one").style.display = "none";
    document.getElementById("twenty-bills").style.display = "none";
    document.getElementById("ten-bills").style.display = "none";
    document.getElementById("five-bills").style.display = "none";
    document.getElementById("one-bills").style.display = "none";
}

// Function to decide what to show if box is checked or not
function checkedOrNot() {
    if (document.getElementById("dollars-check").checked == true) {
        handleCheckBox();
    }

    else {
        hideAgain();
    }
  }
  
// Function for checkbox click
document.getElementById("dollars-check").onchange = checkedOrNot;



// Functions for showing which dollar bills to give

// Function for 20 dollar bills
function twentyDollarBills() {
    var dollarsTotal = Number(dollarsChange());
    if (dollarsTotal < 20) {
        return 0
    }
    else {
        return Math.floor(dollarsTotal/20);
    }

}

// Function for message displaying twenty dollar bills needed
function twentiesMessage() {
    var twentiesReturn = twentyDollarBills();
    var twentiesMessage = document.getElementById("twenty-bills").innerHTML=twentiesReturn;
    return twentiesMessage;
}


// Function for leftover dollars after 20s
function leftoverDollars() {
    var dollarsTotal = Number(dollarsChange());
    var dollarsTaken = twentyDollarBills() * 20;
    return dollarsTotal - dollarsTaken;
}


// Function for 10 dollar bills
function tenDollarBills() {
    var dollarsLeft = leftoverDollars();
    dollarsTotal = leftoverDollars();
    if (dollarsTotal < 10) {
        return 0
    }
    else {
        return Math.floor(dollarsLeft/10);
    }
}

// Function for message displaying ten dollar bills needed
function tensMessage() {
    var tensReturn = tenDollarBills();
    var tensMessage = document.getElementById("ten-bills").innerHTML=tensReturn;
    return tensMessage;
}


// Function for leftover dollars after 10s
function leftoverDollars2() {
    var dollarsLeft = leftoverDollars();
    var dollarsTaken = tenDollarBills() * 10;
    return dollarsLeft - dollarsTaken;
}

// Function for 5 dollar bills
function fiveDollarBills() {
    var dollarsLeft = leftoverDollars2();
    if (dollarsTotal < 5) {
        return 0
    }
    else {
        return Math.floor(dollarsLeft/5);
    }
}

// Function for message displaying five dollar bills needed
function fivesMessage() {
    var fivesReturn = fiveDollarBills();
    var fivesMessage = document.getElementById("five-bills").innerHTML=fivesReturn;
    return fivesMessage;
}


// Function for leftover dollars after 5s
function leftoverDollars3() {
    var dollarsLeft = leftoverDollars2();
    var dollarsTaken = fiveDollarBills() * 5;
    return dollarsLeft - dollarsTaken;
}


// // Function for 1 dollar bills
function oneDollarBills() {
    var dollarsLeft = leftoverDollars3();
    if (dollarsTotal < 1) {
        return 0
    }
    else {
        return Math.floor(dollarsLeft/1);
    }
}


// Function for message displaying one dollar bills needed
function onesMessage() {
    var onesReturn = oneDollarBills();
    var onesMessage = document.getElementById("one-bills").innerHTML=onesReturn;
    return onesMessage;
}


