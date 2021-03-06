<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phone Call</title>
    <!-- <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous"> -->
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>

<body>
<?php
    include ('head.php');
?>
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <div class="half-width">
                    <div class="smartphone" id="callerPart">
                        <div class="content">
                            <div class="calling" id="calling">
                                <h3 id="callingTitle" style="text-align: left;">Calling.........</h3>
                                <div class="">
                                    <p id="duration"><label id="callerMinutes">00</label>:<label
                                            id="callerSeconds">00</label></p>
                                    <button class="callCutBtn" onclick="callCut();stopTime()" id="callCutBtn">
                                        <i class="fa fa-phone fa-2x"></i>
                                    </button>
                                    <button onclick="cutMessage()" id="okBtn">
                                        OK
                                    </button>
                                </div>
                            </div>
                            <div class="showInvalidNumber" id="invalid">
                                <div class="">
                                    <p style="text-align: left;">Number is Invalid. Please enter a valid number</p>
                                    <button onclick="invalidNumber()" id="invalidHideBtn">
                                        OK
                                    </button>
                                </div>
                            </div>
                            <div class="display">
                                <input id="inputPin" class="form-control inp" type="text">
                            </div>
                            <div class="numbers" id="numbers">
                                <div class="calc-body">
                                    <div class="calc-button-row">
                                        <div class="button" onclick="inputPin.value += '1'">1</div>
                                        <div class="button" onclick="inputPin.value += '2'">2</div>
                                        <div class="button" onclick="inputPin.value += '3'">3</div>
                                    </div>

                                    <div class="calc-button-row">
                                        <div class="button" onclick="inputPin.value += '4'">4</div>
                                        <div class="button" onclick="inputPin.value += '5'">5</div>
                                        <div class="button" onclick="inputPin.value += '6'">6</div>
                                    </div>
                                    <div class="calc-button-row">
                                        <div class="button" onclick="inputPin.value += '7'">7</div>
                                        <div class="button" onclick="inputPin.value += '8'">8</div>
                                        <div class="button" onclick="inputPin.value += '9'">9</div>
                                    </div>
                                    <div class="calc-button-row">
                                        <div class="button" onclick="inputPin.value += '*'">*</div>
                                        <div class="button" onclick="inputPin.value += '0'">0</div>
                                        <div class="button" onclick="inputPin.value += '#'">#</div>
                                    </div>
                                    <div class="calc-button-row">
                                        <div id="clear" class="button" onclick="clearScreen()">C</div>
                                        <div class="button call" onclick="phoneCall()"><i class="fa fa-phone"></i>
                                        </div>
                                        <div class="button" onclick="singleNumberRemove()">
                                            <i class="fa fa-times-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4" id="transferPart">
                <div id="transferCall">
                    <p id="operator"></p>
                    <p id="tranferNumber"></p>
                    <p id="companyDuration"><label id="companyMinutes">00</label>:<label id="companySeconds">00</label>
                    </p>
                    <button id="transfer" onclick="transferCall()">Transfer Call</button>
                    <form action="callHistory.php" method="POST">
                        <input type="hidden" id="totalTime" name="duration">
                        <input type="hidden" id="operatorNumber" name="operatorNumber">
                        <input type="hidden" id="operatorName" name="operatorName">
                        <input type="hidden" id="cost" name="cost">
                        <button type="submit"   id="dismiss" style="background-color: red;" onclick="dismiss()">Dismiss</button>
                   </form>
                </div>
            </div>
            <div class="col-md-4">
                <div class="half-width" id="receivePart">
                    <div class="smartphone">
                        <div class="content">
                            <div class="receiving" id="receiving">
                                <div class="space" id="callerIdentity">
                                    <p id="phoneNumber">Phone Number</p>
                                    <p id="duringCallTime"><label id="receiverMinutes">00</label>:<label
                                            id="receiverSeconds">00</label>
                                    </p>
                                </div>
                                <div class="space" id="receiverBtn">
                                    <button onclick="callCut();stopTime()" class="callCutBtn" id="callCutRecBtn">
                                        <i class="fa fa-phone fa-2x"></i>
                                    </button>
                                    <button class="callRecBtn" id="callReceiveBtn" onclick="callReceive()">
                                        <i class="fa fa-phone fa-2x"></i>
                                    </button>
                                </div>
                                <div class="space" id="receiverCallSummary">
                                    <button onclick="recScreenClr()" id="recOkBtn">
                                        OK
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="main.js">

    </script>

</body>
</body>

</html>