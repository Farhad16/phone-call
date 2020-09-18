//Manage phone call
var totalSeconds;
function phoneCall() {
    totalSeconds = 0;

    document.getElementById('inputPin').style.display = "none";
    document.getElementById('numbers').style.pointerEvents = 'none';
    document.getElementById('okBtn').style.display = "none";

    const inputNumber = document.getElementById('inputPin').value;

    const operator = inputNumber.slice(0, 3);
    if (inputNumber.length == 11 && (operator === "017" ||
        operator === "013" || operator === "018" ||
        operator === "014" || operator === "019" || operator === "016" || operator === "015")) {

        if (operator === "017" || operator === "013") {
            assignNumberAndOperator("Grameenphone");
            tranferPartOpen();
        }
        else if (operator === "018") {
            assignNumberAndOperator("Robi");
            tranferPartOpen();
        }
        else if (operator === "014" || operator === "019") {
            assignNumberAndOperator("Banglalink");
            tranferPartOpen();
        }
        else if (operator === "016") {
            assignNumberAndOperator("Airtel");
            tranferPartOpen();
        }
        else if (operator === "015") {
            assignNumberAndOperator("Teletalk")
            tranferPartOpen();
        }
        else {
            document.getElementById('invalid').style.display = "block"
        }

    }
    else {
        document.getElementById('invalid').style.display = "block"
    }
}

function assignNumberAndOperator(nameOfOperator) {
    const inputNumber = document.getElementById('inputPin').value;

    const phoneNumber = document.getElementById('phoneNumber');
    const operatorShow = document.getElementById('operator');
    const transferNumber = document.getElementById('tranferNumber');
    const operatorNumber = document.getElementById('operatorNumber');
    const operatorName = document.getElementById('operatorName');


    operatorShow.innerText = nameOfOperator;
    operatorName.value = nameOfOperator
    transferNumber.innerText = inputNumber;
    phoneNumber.innerText = inputNumber;
    operatorNumber.value = inputNumber;
}

//transfer Call

function tranferPartOpen() {
    document.getElementById('callerPart').style.display = "none";
    document.getElementById('transferPart').style.display = "block";
}


function transferCall() {
    displayBlock();
}
// Responsible for some display none to block
function displayBlock() {
    //caller 
    document.getElementById('calling').style.display = "block";
    document.getElementById('callCutBtn').style.display = "block";
    document.getElementById('callingTitle').style.display = 'block';
    document.getElementById('tranferNumber').style.display = 'block';


    //receiver
    document.getElementById('receivePart').style.display = "block";
    document.getElementById('receiving').style.display = "block";
    document.getElementById('receiverBtn').style.display = "flex";
    document.getElementById('callerIdentity').style.display = "block";
    document.getElementById('receiverCallSummary').style.display = "none";
    document.getElementById('callCutRecBtn').style.display = "block";
    document.getElementById('callReceiveBtn').style.display = "block";

    //Phone numbers
    document.getElementById('numbers').style.display = "none";

    //transferPart
    document.getElementById('transferPart').style.display = "none";
}


// Responsible to cut a call
function callCut() {
    document.getElementById('callCutBtn').style.display = 'none';
    document.getElementById('receiverCallSummary').style.display = 'block';


    document.getElementById('okBtn').style.display = "block";
    document.getElementById('phoneNumber').style.display = "none";
    // document.getElementById('operator').style.display = "none";

    document.getElementById('callCutRecBtn').style.display = "none";
    document.getElementById('callReceiveBtn').style.display = "none";

    //TransferPart
    document.getElementById('transferPart').style.display = "block";
    document.getElementById('numbers').style.display = "block";
    document.getElementById('transfer').style.display = "none";
    document.getElementById('dismiss').style.display = "block";

    //ReceiverPart
    document.getElementById('receivePart').style.display = "none";
}

//dismiss button 
function dismiss() {
    document.getElementById('callerPart').style.display = "block";
    document.getElementById('transferPart').style.display = "none";
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

    const receiverMinutes = document.getElementById("receiverMinutes");
    const receiverSeconds = document.getElementById("receiverSeconds");
    const companyMinutes = document.getElementById("companyMinutes");
    const companySeconds = document.getElementById("companySeconds");



    stopTimes = setInterval(setTime, 1000);

    function setTime() {
        ++totalSeconds;
        receiverSeconds.innerHTML = pad(totalSeconds % 60);
        receiverMinutes.innerHTML = pad(parseInt(totalSeconds / 60));
        companySeconds.innerHTML = pad(totalSeconds % 60);
        companyMinutes.innerHTML = pad(parseInt(totalSeconds / 60));

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
    clearInterval(stopTimes);
    const operator = document.getElementById("operator").innerText;
    const bill = calBill(operator, totalSeconds);
    const taka = bill / 100;

    // const duration = document.getElementById('duration');
    const companyDuration = document.getElementById('companyDuration');
    const totalTime = document.getElementById("totalTime");
    const cost = document.getElementById("cost");
    totalTime.value = companyDuration.innerText;
    console.log(totalTime.value);
    cost.value = taka.toFixed(2);
    // duration.innerText = `Duration   ${duration.innerText} \n See Cost Tk  ${taka.toFixed(2)}`;
    companyDuration.innerText = `Duration   ${companyDuration.innerText} \n See Cost Tk  ${taka.toFixed(2)}`;
}

function calBill(operator, time) {
    if (operator == 'Grameenphone') {
        return time * 1.9;
    }
    else if (operator == 'Banglalink') {
        return time * 1.8;
    }
    else if (operator == 'Robi') {
        return time * 1.5;
    }
    else if (operator == 'Airtel') {
        return time * 1.5;
    }
    else if (operator == 'Teletalk') {
        return time * 1.7;
    }
}
