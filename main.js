//Manage phone call
var totalSeconds;
function phoneCall() {
    totalSeconds = 0;

    document.getElementById('inputPin').style.display = "none";
    document.getElementById('numbers').style.pointerEvents = 'none';
    document.getElementById('okBtn').style.display = "none";


    const phoneNumber = document.getElementById('phoneNumber');
    const operatorShow = document.getElementById('operator');
    phoneNumber.innerText = "";
    operatorShow.innerText = "";

    const inputNumber = document.getElementById('inputPin').value;


    const operator = inputNumber.slice(0, 3);
    if (inputNumber.length == 11 && (operator === "017" ||
        operator === "013" || operator === "018" ||
        operator === "014" || operator === "019" || operator === "016" || operator === "015")) {

        if (operator === "017" || operator === "013") {
            operatorShow.innerText = "Grameenphone";
            phoneNumber.innerText = inputNumber;
            displayBlock();
        }
        else if (operator === "018") {
            operatorShow.innerText = "Robi";
            phoneNumber.innerText = inputNumber;
            displayBlock();
        }
        else if (operator === "014" || operator === "019") {
            operatorShow.innerText = "Banglalink";
            phoneNumber.innerText = inputNumber;
            displayBlock();
        }
        else if (operator === "016") {
            operatorShow.innerText = "Airtel";
            phoneNumber.innerText = inputNumber;
            displayBlock();
        }
        else if (operator === "015") {
            operatorShow.innerText = "Teletalk";
            phoneNumber.innerText = inputNumber;
            displayBlock();
        }
        else {
            document.getElementById('invalid').style.display = "block"
        }

    }
    else {
        document.getElementById('invalid').style.display = "block"
    }
}


// Responsible for some display none to block
function displayBlock() {
    //caller
    document.getElementById('calling').style.display = "block";
    document.getElementById('callCutBtn').style.display = "block";
    document.getElementById('callingTitle').style.display = 'block';


    //receiver
    document.getElementById('receiving').style.display = "block";
    document.getElementById('receiverBtn').style.display = "flex";
    document.getElementById('callerIdentity').style.display = "block";
    document.getElementById('receiverCallSummary').style.display = "none";
    document.getElementById('callCutRecBtn').style.display = "block";
    document.getElementById('callReceiveBtn').style.display = "block";

    //Phone numbers
    document.getElementById('numbers').style.display = "none";
}


// Responsible to cut a call
function callCut() {
    document.getElementById('callCutBtn').style.display = 'none';
    document.getElementById('receiverCallSummary').style.display = 'block';
    document.getElementById('callingTitle').style.display = 'none';

    document.getElementById('okBtn').style.display = "block";
    document.getElementById('phoneNumber').style.display = "none";
    document.getElementById('operator').style.display = "none";

    document.getElementById('callCutRecBtn').style.display = "none";
    document.getElementById('callReceiveBtn').style.display = "none";

    document.getElementById('numbers').style.display = "block";
}

// Responsible to cut a message
function cutMessage() {
    document.getElementById('numbers').style.pointerEvents = 'auto';
    document.getElementById('calling').style.display = 'none';
    document.getElementById('inputPin').value = "";
    document.getElementById('inputPin').style.display = "block";
    document.getElementById('invalid').style.display = "none";
    location.reload();
}


// Clear the receiver screen
function recScreenClr() {
    document.getElementById('receiving').style.display = 'none';
    document.getElementById('recOkBtn').style.display = 'none';
    location.reload();
}

// Show the input screen when click the invalid number message
function invalidNumber() {
    document.getElementById('numbers').style.pointerEvents = 'auto';
    document.getElementById('calling').style.display = 'none';
    document.getElementById('inputPin').style.display = "block";
    document.getElementById('invalid').style.display = "none"
}

// C button clear the screen
function clearScreen() {
    const inputPin = document.getElementById('inputPin');
    inputPin.value = '';
}


// Clear a single number 
function singleNumberRemove() {
    const inputPin = document.getElementById('inputPin');
    inputPin.value = inputPin.value.slice(0, -1)
}

var stopTimes;
//Receive button
function callReceive() {
    document.getElementById('callReceiveBtn').style.display = "none";

    const callerMinutes = document.getElementById("callerMinutes");
    const callerSeconds = document.getElementById("callerSeconds");
    const receiverMinutes = document.getElementById("receiverMinutes");
    const receiverSeconds = document.getElementById("receiverSeconds");



    stopTimes = setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        callerSeconds.innerHTML = pad(totalSeconds % 60);
        callerMinutes.innerHTML = pad(parseInt(totalSeconds / 60));
        receiverSeconds.innerHTML = pad(totalSeconds % 60);
        receiverMinutes.innerHTML = pad(parseInt(totalSeconds / 60));
    }

    function pad(val) {
        var valString = val + "";
        if (valString.length < 2) {
            return "0" + valString;
        } else {
            return valString;
        }
    }
}


function stopTime() {
    console.log("stop");
    clearInterval(stopTimes);
    console.log("Call Duration", totalSeconds);
    const operator = document.getElementById("operator").innerText;
    const bill = calBill(operator, totalSeconds);
    const taka = bill / 100;
    console.log(taka.toFixed(2));
    let duration = document.getElementById('duration')
    duration.innerText = `Duration   ${duration.innerText} \n See Cost Tk  ${taka}`;

}

function calBill(operator, time) {
    if (operator == 'Grameenphone') {
        return time * 1.7;
    }
    else if (operator == 'Banglalink') {
        return time * 1.5;
    }
    else if (operator == 'Robi') {
        return time * 1.1;
    }
    else if (operator == 'Airtel') {
        return time * 1.2;
    }
    else if (operator == 'Teletalk') {
        return time * 1.6;
    }
}
